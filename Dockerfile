FROM node:22-alpine3.18

WORKDIR /usr/name-generator-app

COPY . .

RUN npm install --only=production

CMD [ "npm", "start" ]
