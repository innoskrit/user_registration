FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3300

CMD ["node", "."]