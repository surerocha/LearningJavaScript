# API REST - Programação Web

Bem-vindo ao repositório da API REST. 

Este projeto é uma aplicação simples construída usando Node.js e o framework Express.

## Descrição

Esta API oferece endpoints para diferentes versões e idiomas. O objetivo é demonstrar como criar rotas e fornecer respostas em diferentes formatos e idiomas. 

## Instalação e Execução

Para rodar esta API, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências:**

   O projeto utiliza o Express, então primeiro instale a dependência do Express:

   ```bash
   npm install express
   ```

   Em seguida, instale outras dependências do projeto (se houver):

   ```bash
   npm install
   ```

3. **Inicie o servidor:**

   Execute o seguinte comando para iniciar a API:

   ```bash
   node app
   ```

   A API estará disponível no `http://localhost:8000`.

## Endpoints Disponíveis

- **Rota raiz (`/`):**

  Retorna uma mensagem indicando os endpoints disponíveis e suas opções.

  ```
  GET http://localhost:8000/
  ```

- **Versão 1 (`/v1/:name`):**

  Retorna uma mensagem de saudação na versão 1.

  ```
  GET http://localhost:8000/v1/{name}
  ```

- **Versão 2 (`/v2/:name`):**

  Retorna uma mensagem de saudação na versão 2.

  ```
  GET http://localhost:8000/v2/{name}
  ```

- **Versão 3 (`/v3/pt-br/:name`):**

  Retorna uma mensagem de saudação em português.

  ```
  GET http://localhost:8000/v3/pt-br/{name}
  ```

- **Versão 3 (`/v3/en-us/:name`):**

  Retorna uma mensagem de saudação em inglês.

  ```
  GET http://localhost:8000/v3/en-us/{name}
  ```

- **Versão 3 (`/v3/es-ar/:name`):**

  Retorna uma mensagem de saudação em espanhol.

  ```
  GET http://localhost:8000/v3/es-ar/{name}
  ```

- **Tratamento de Erro 404:**

  Se o endpoint não for encontrado, a API retornará um status 404 com uma mensagem de erro.

## Código Comentado

O código da API está comentado para facilitar a compreensão dos diferentes endpoints e o tratamento de erros.

---

Autor: Sure Rocha
