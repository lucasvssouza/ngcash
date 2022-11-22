FROM node:19
WORKDIR /ngcash/app
COPY package*.json .

RUN npm install

COPY . .
EXPOSE 3000

CMD ["npm", "start"]

#COPY ./db/init.sql /docker-entrypoint-initdb.d/init.sql

