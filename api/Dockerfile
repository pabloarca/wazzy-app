FROM node:22-alpine

WORKDIR /app

# Copiamos package.json / package-lock.json
COPY package*.json ./


RUN npm install --omit=dev


COPY . .

ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000

CMD ["node", "src/server.js"]