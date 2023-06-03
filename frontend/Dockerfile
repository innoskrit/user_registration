FROM node:14 as builder

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000 80

CMD ["nginx", "-g", "daemon off;"]