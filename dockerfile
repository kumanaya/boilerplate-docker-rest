FROM node:alpine

LABEL version="1.0.0" description="Boilerplate REST API" maintainer="Daniel Kumanaya <@kumanaya>"

WORKDIR /app

COPY ./app /app

RUN npm install

RUN npm run build

CMD [ "node", "/app/dist/server.js" ]
