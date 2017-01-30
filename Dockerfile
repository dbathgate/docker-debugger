FROM node:7.4.0-slim

COPY app.js .
COPY package.json .

RUN npm install

EXPOSE 18080

CMD node app.js
