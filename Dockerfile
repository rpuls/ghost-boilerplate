FROM node:22.13.1-bookworm-slim

WORKDIR /var/lib/ghost

ENV NODE_ENV=production

COPY package*.json ./
COPY components ./components
COPY script ./script

RUN npm ci --omit=dev --omit=optional

COPY . .

EXPOSE 2368

CMD ["npm", "start"]
