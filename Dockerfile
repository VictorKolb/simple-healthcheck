FROM node:12.16.0-alpine

RUN apk update
RUN apk upgrade

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY src /app

CMD [ "yarn", "start" ]
