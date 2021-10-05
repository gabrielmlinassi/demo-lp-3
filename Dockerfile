# base image
FROM node:16.3-alpine3.12

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

ARG NODE_ENV="production"
ENV NODE_ENV=${NODE_ENV}

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start
