FROM node:latest

WORKDIR /dca

COPY package*.json ./

COPY . .

RUN npm install --production

EXPOSE 5000

CMD ["npm", "run", "start:production"]
