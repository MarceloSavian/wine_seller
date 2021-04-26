# pull official base image
FROM node:12.18.3-alpine

RUN apk --no-cache add --virtual builds-deps build-base python

RUN mkdir -p /usr/src/wine/node_modules && chown -R node:node /usr/src/wine

# set working directory
WORKDIR /usr/src/wine

# install app dependencies
COPY package.json ./

RUN npm install --only=prod
COPY . ./

EXPOSE 5050

RUN npm cache clean --force
RUN npm run build

CMD ["yarn", "start"]
