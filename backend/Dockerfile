FROM node:20.16.0
WORKDIR /backend
COPY package.json ./
RUN npm install 
COPY . .
RUN npm start