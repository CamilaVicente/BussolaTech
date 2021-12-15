const express = require("express");
const cors = require("cors");


const app = express()


app.use(express.json())
app.use(cors())


const alunosRoutes = require("./routes/alunosRoutes")

app.use("/", alunosRoutes)
module.exports = app