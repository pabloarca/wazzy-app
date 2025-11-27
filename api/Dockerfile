FROM node:22-alpine

WORKDIR /app

# 1. Instalar dependencias de producción
COPY package*.json ./
RUN npm install --omit=dev

# 2. Copiar el resto del código (incluido prisma/schema.prisma)
COPY . .

ENV NODE_ENV=production
ENV PORT=4000

# 3. Generar el cliente de Prisma dentro de la imagen
RUN npx prisma generate

EXPOSE 4000

# 4. En arranque: aplicar migraciones y levantar el server
CMD ["sh", "-c", "npx prisma migrate deploy && node src/server.js"]
