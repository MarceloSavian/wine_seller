# Tutorial de instalação

## Pacotes

Instalação dos pacotes

> npm install

## Configuração do banco de dados

Configure a **mongoUrl** em:

> src/main/config/env.ts

Tambem rode as migrações [aqui](./migrations)

## Configuração das portas

Voce pode alterar a porta do projeto em

> src/main/config/env.ts

Altere a variavel **port** 

## Build

Fazer a build do projeto

> npm run build

## Rodar o projeto

Após a build rode o comando:

> npm run start

## Debug

Caso queira debugar:

> npm run debug