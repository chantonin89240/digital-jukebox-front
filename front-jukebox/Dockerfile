FROM node:18.18.0-alpine

RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

RUN apk update && apk upgrade

COPY . /usr/src/nuxt-app/
RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]