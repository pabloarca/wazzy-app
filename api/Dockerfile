FROM node:22-alpine

WORKDIR /app

# 1. Instalar dependencias de producción
COPY package*.json ./
RUN npm install --omit=dev

# 2. Copiar el resto del código (incluido prisma/)
COPY . .

ENV NODE_ENV=production
ENV PORT=4000

# 3. Generar el cliente de Prisma
RUN npx prisma generate

EXPOSE 4000

# 4. Al arrancar el contenedor:
#    - sincroniza el schema con la DB (db push)
#    - arranca el server
CMD ["sh", "-c", "npx prisma db push && node src/server.js"]
