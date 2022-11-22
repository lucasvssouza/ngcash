# Aplicação de Teste Dockerizada - NGCash
  Aplicação desenvolvida em React.JS Node.JS, Typescript e Docker, utilizando como editor de código o Visual Studio Code.
  
## Requisitos
  - Node.js
  - Docker
  - Editor de Código (Visual Studio Code)

## Inicialização 
  - Dentro da pasta raiz do projeto, utilizar o comando ```docker-compose up db -d``` e aguardar a inicialização do Banco de Dados;
  - (Opcional) Dentro da pasta raiz do projeto, utilizar o comando ```docker-compose up pgamin -d``` para iniciar o PGAdmin;
  - Dentro da pasta raiz do projeto, utilizar o comando ```docker-compose up``` e aguardar a inicialização da API e do Frontend;

## Rotas
  - ```localhost:3000/login``` retorna para a página de Login, caso não esteja logando;
  - ```localhost:3000/register``` retorna para a página de Registro, caso não esteja logando;
  - ```localhost:3000/home``` retorna para a página de Home, caso esteja logando;
  - ```localhost:3000/transfer``` retorna para a página de Login, caso esteja logando;
  - ```localhost:3000/history``` retorna para a página de Login, caso esteja logando;
  
## Bibliotecas Utilizadas
  ### API - Backend
  - "@types/node": "^16.18.3"
  - "@types/express": "^4.17.14"
  - "@types/uuid": "^8.3.4"
  - "ts-node": "^10.7.0"
  - "typescript": "4.5.2"
  - "bcrypt": "^5.1.0"
  - "cors": "^2.8.5"
  - "dotenv": "^16.0.3"
  - "express": "^4.18.2"
  - "jsonwebtoken": "^8.5.1"
  - "morgan": "^1.10.0"
  - "nodemon": "^2.0.20"
  - "pg": "^8.4.0"
  - "reflect-metadata": "^0.1.13"
  -"typeorm": "0.3.10"
  ### Frontend 
  - "@types/styled-components": "^5.1.26"
  - "axios": "^1.1.3"
  - "react-router-dom": "^6.4.3"
  - "styled-components": "^5.3.6"
  - "typescript": "^4.9.3"
      

 
