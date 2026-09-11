# Nuvem Pessoal Simplificada

Projeto acadêmico desenvolvido para a disciplina de Análise e Desenvolvimento de Sistemas.

## Integrantes

- Carlos Henrique de Souza Santana
- Leanderson Torres de Souza
- Gerson Brenner da Silva Farias

## Descrição

O projeto consiste em uma API REST para armazenamento e gerenciamento de arquivos utilizando Node.js, Express e MinIO.

A aplicação permite enviar arquivos para um armazenamento de objetos compatível com S3, listar os arquivos armazenados e realizar o download dos arquivos por meio de rotas HTTP.

## Tecnologias utilizadas

- Node.js
- Express
- MinIO
- Docker
- Docker Compose
- Multer
- CORS
- dotenv
- Git e GitHub

## Estrutura do projeto

```text
nuvem-pessoal-simplificada/
├── docker-compose.yml
├── .env
├── .env.example
├── package.json
├── package-lock.json
└── src/
    ├── app.js
    ├── server.js
    ├── config/
    │   └── minio.js
    ├── controllers/
    │   └── filesController.js
    ├── routes/
    │   └── filesRoutes.js
    └── services/
        └── filesService.js
