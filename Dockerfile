FROM node:latest
WORKDIR /Portfolio
COPY . /Portfolio/
RUN npm install
CMD ["npm", "run", "dev"]
EXPOSE 6007