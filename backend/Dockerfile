FROM node:20-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
CMD ["npm", "run", "start:dev"]