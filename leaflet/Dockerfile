FROM node:14-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install
RUN npm install --save bootstrap

COPY . .

CMD ["npm", "start"]
