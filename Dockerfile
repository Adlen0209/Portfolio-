FROM node:alpine 
WORKDIR /Portfolio
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev"]
