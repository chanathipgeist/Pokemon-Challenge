FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
# docker build -t pokemon-web-app .
# docker run -d -p 8083:8083 --name my-pokemon-web-app pokemon-web-app
