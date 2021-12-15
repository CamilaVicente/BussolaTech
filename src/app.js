
require('dotenv-safe').config()

const express = require("express");
const cors = require("cors");


const database = require('./database/mongoConfig')

const alunos = require("./routes/alunosRoutes")

const app = express();


app.use(express.json())
app.use(cors())
app.use("/", alunos)

database.connect();

module.exports = app