FROM node:12.10.0-alpine

ENV APP_PORT 9012

WORKDIR /app/

COPY package*.json ./

RUN npm ci

COPY ./ ./

RUN npm run build

EXPOSE 9012

CMD ["npm", "run", "start"]