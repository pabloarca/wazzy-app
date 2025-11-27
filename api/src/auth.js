const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { z } = require('zod')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

const loginSchema = registerSchema

const cookieName = 'refreshToken'

function parseDuration(duration) {
  const match = /^([0-9]+)([smhd])$/.exec(duration)
  if (!match) return undefined
  const value = Number(match[1])
  const unit = match[2]
  const multipliers = {
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
  }
  return value * multipliers[unit]
}

function buildCookieOptions() {
  const isProd = process.env.NODE_ENV === 'production'
  return {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax',
    path: '/auth',
    maxAge: parseDuration(process.env.REFRESH_TTL || '7d'),
  }
}

function generateAccessToken(userId) {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET is not configured')
  }
  return jwt.sign({ sub: userId }, secret, {
    expiresIn: process.env.ACCESS_TTL || '15m',
  })
}

function generateRefreshToken(userId) {
  const secret = process.env.JWT_REFRESH_SECRET
  if (!secret) {
    throw new Error('JWT_REFRESH_SECRET is not configured')
  }
  return jwt.sign({ sub: userId }, secret, {
    expiresIn: process.env.REFRESH_TTL || '7d',
  })
}

function verifyAccessToken(token) {
  const secret = process.env.JWT_SECRET
  if (!secret) throw new Error('JWT_SECRET is not configured')
  return jwt.verify(token, secret)
}

function verifyRefreshToken(token) {
  const secret = process.env.JWT_REFRESH_SECRET
  if (!secret) throw new Error('JWT_REFRESH_SECRET is not configured')
  return jwt.verify(token, secret)
}

async function handleRegister(req, res) {
  const parseResult = registerSchema.safeParse(req.body)
  if (!parseResult.success) {
    return res
      .status(400)
      .json({ error: 'Invalid payload', details: parseResult.error.issues })
  }

  const { email, password } = parseResult.data
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    return res.status(409).json({ error: 'User already exists' })
  }

  const hashed = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: { email, password: hashed },
  })

  const accessToken = generateAccessToken(user.id)
  const refreshToken = generateRefreshToken(user.id)

  res.cookie(cookieName, refreshToken, buildCookieOptions())

  return res.status(201).json({
    accessToken,
    user: {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
    },
  })
}

async function handleLogin(req, res) {
  const parseResult = loginSchema.safeParse(req.body)
  if (!parseResult.success) {
    return res
      .status(400)
      .json({ error: 'Invalid payload', details: parseResult.error.issues })
  }

  const { email, password } = parseResult.data
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  const accessToken = generateAccessToken(user.id)
  const refreshToken = generateRefreshToken(user.id)

  res.cookie(cookieName, refreshToken, buildCookieOptions())
  return res.json({
    accessToken,
    user: {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
    },
  })
}

async function handleRefresh(req, res) {
  const token = req.cookies[cookieName]
  if (!token) {
    return res.status(401).json({ error: 'Refresh token missing' })
  }

  let payload
  try {
    payload = verifyRefreshToken(token)
  } catch (_err) {
    return res.status(401).json({ error: 'Invalid refresh token' })
  }

  const user = await prisma.user.findUnique({
    where: { id: Number(payload.sub) },
  })
  if (!user) {
    return res.status(401).json({ error: 'User not found' })
  }

  const newAccess = generateAccessToken(user.id)
  const newRefresh = generateRefreshToken(user.id)

  res.cookie(cookieName, newRefresh, buildCookieOptions())

  return res.json({
    accessToken: newAccess,
    user: {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
    },
  })
}

function handleLogout(_req, res) {
  res.clearCookie(cookieName, { path: '/auth' })
  return res.json({ success: true })
}

async function authenticate(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader?.split(' ')[1]
  if (!token) {
    return res.status(401).json({ error: 'Missing token' })
  }

  try {
    const payload = verifyAccessToken(token)
    req.userId = Number(payload.sub)
    return next()
  } catch (_err) {
    return res.status(401).json({ error: 'Invalid token' })
  }
}

async function handleMe(req, res) {
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, email: true, createdAt: true },
  })
  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }
  return res.json(user)
}

module.exports = {
  handleRegister,
  handleLogin,
  handleRefresh,
  handleLogout,
  handleMe,
  authenticate,
  prisma,
}
