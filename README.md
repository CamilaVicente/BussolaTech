# Projeto Final {Reprograma}
Bussola Tech 2021

<h1 align="center">
    <br>
    <p align="center">Bussola Tech - Back End<p>
</h1>
<p align="center">
<img src="./Pro-league.png" width="350" height="300"/>
</p>
<br>

## 💻 Sobre o projeto 

<br>

 API desenvolvida como Projeto Final com o auxílio da professora Paula Allemand para a conclusão do curso de Backend  [{Reprograma}](https://reprograma.com.br/)

<p align="justify">

<p align="justify">
<p align="justify">

<br><br>

## 🚀 Descrição da API Bussola Tech

<br>

<p align="justify">O projeto consiste em uma API REST para uma plataforma de cursos gratuitos , onde iniciantes na programação podem achar indicações de
cursos e plataformas gratuitas para estudar e tirar dúvidas.

<p align="justify">A interface é um CRUD completo integrado com o banco de dados, onde é possível fazer cadastros, atualizar os dados e deletar informações de alunos e cursos.


  
<br>

## ⚙️ Funcionalidades/Objetivos

- Listar todas as pessoas e cursos que estão cadastrados no sistema;
- Conseguir visualizar o cadastro de alunos pelo Id;
- Listar cursos pela area ou pelo nome;
- Cadastrar pessoas que estejam em caso de vulnerabilidade social;
- Atualizar informaçẽs de cursos e de alunos;
- Deletar cursos ou cadastro de alunos;
<br>

## 📚 Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)


<br>

## 📁 Arquitetura MVC 

```
 📁 BUSSOLATECH-BACKEND
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 coursesController.js
   |         |- 📑 loginUsuarioController.js
   |     
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 models
   |         |- 📑 coursesSchema.js
   |         |- 📑 loginUsuarioSchema.js
   |         
   |    |- 📁 routes
   |         |- 📑 coursesRoutes.js
   |         |- 📑 studentRoutes.js
   |
   |    |- 📑 app.js
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 ProcFile
   |- 📑 README.md
   |- 📑 server.js
```
<br>

## 🔃 Rotas

* local: http://localhost:7595

* Heroku: https://bussola-tech.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

<br>

## 🔃 Manipulação das Rotas de Alunos:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/students/all`                | Retorna todos os usuários            |
| GET          | `/students/search/:id`        | Retorna o usuario referente ao ID solicitado              |
| POST         | `/students/register`         | Cria/cadastra um novo usuário        |
| PUT          | `/students/update/:id`     | Altera informações de um usuário     |
| DELETE       | `/students/delete/:id`     | Deleta um usuário específico         |

<br>

## 🔃 Manipulação das Rotas de cursos:

| Método HTTP  | Endpoint              | Descrição                                  |
| ------------ | --------------------- | ------------------------------------------ |
| GET          | `/courses/all`            | Retorna todos os cursos                 |
| GET          | `/courses/search/:name`  | Retorna o curso pelo nome       |
| GET          | `/courses/search/:stack`  | Retorna cursos de acordo com a stack específica (frontend, backend e fullstack)       |
| POST         | `/courses/newRegister`   | Cadastra um novo curso na plataforma                |
| PUT          | `/courses/update` | Atualização ou Alteração informações dos cursos           |
| DELETE       | `/courses/delete/:id` | xclusão de cursos obsoletos ou fora do ar               |

<br>

## 🚧 Melhorias para o futuro (Em construção)

<br>

*  Criar Login e autenticação.
*  Terminar implementação de código Front-end,utilizando algum framework. Para o usuário ter a interação na tela.
* Criar endpoints e permissões de administradores para plataforma.


Estou aberta a opiniões, caso queiram contribuir com meu projeto.

<br>
