FROM mhart/alpine-node:16.4.2

WORKDIR /app/

COPY package*.json ./

RUN npm ci

COPY ./ ./

RUN npm run build

EXPOSE 8080 

CMD ["npm", "run", "start"]
