FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src/ ./src
COPY public/ ./public
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 8083
CMD ["nginx", "-g", "daemon off;"]
