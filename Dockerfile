FROM node
MAINTAINER AgileVision

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

ADD . /usr/src/app

EXPOSE 80
CMD [ "npm", "start" ]
