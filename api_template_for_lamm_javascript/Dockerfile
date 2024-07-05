FROM node:22-alpine3.19
WORKDIR /user/code
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "run", "server:prod"]       
