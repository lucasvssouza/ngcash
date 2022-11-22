FROM node:19
WORKDIR /ngcash/server
COPY package*.json .

RUN npm install 

COPY . .

EXPOSE 5000

CMD npm run migration:generate ; npm run migration:run ; npm start