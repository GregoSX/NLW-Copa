# NLW Copa
Trilha Ignite NLW Copa Rockeatseat. 


## Setup Backend

Instalar NodeJS com versão maior que 16.0.

No diretório server:

1) npm init -y
2) npm i typescript -D
3) npx tsc --init
4) npm i fastify
5) npm i tsx -D
6) npm i prisma -D
7) npm i @prisma/client
8) npx prisma init --datasource-provider SQLite
9) npm i prisma-erd-generator @mermaid-js/mermaid-cli -D 
10) npx prisma generate 
11) npm i @fastify/cors

Quando criar a primeira tabela pelo prisma execute o comando:

npx prisma migrate dev

Para visualizar o nosso banco de dados pelo navegador executamos o comando:

npx prisma studio

## Setup Frontend

1) npx create-next-app@latest --use-npm

## Tecnologias utilizadas

- NodeJS
- Fastify
- Prisma
- React
- React Native
- NextJS
- SQLite
