# pull official base image
FROM node:alpine AS builder

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./

RUN npm install

# add app
COPY . .

# build the folder
RUN npm run build

# Handle Nginx
FROM nginx:stable-alpine AS prod-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 8100
CMD ["nginx", "-g", "daemon off;"]
