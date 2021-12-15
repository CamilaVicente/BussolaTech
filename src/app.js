const express = require("express");
const cors = require("cors");
const alunos = require("./routes/alunosRoutes")

const app = express()


app.use(express.json())
app.use(cors())
app.use("/", alunos)

module.exports = app