#First Stage Build
FROM node:20.16.0 as build
WORKDIR /frontend
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

#Second Stage
FROM nginx:alpine
COPY --from=build /frontend/dist /usr/share/nginx/html 
EXPOSE 80
CMD [ "nginx", "-g", "deamon off" ]
