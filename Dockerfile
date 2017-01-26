FROM node:0.12
EXPOSE 18080
COPY app.js .
CMD node app.js
