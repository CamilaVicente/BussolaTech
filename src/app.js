
require('dotenv-safe').config()

const express = require("express");
const cors = require("cors");


const database = require('./database/mongoConfig')

const student = require("./routes/studentRoutes")

const app = express();


app.use(express.json())
app.use(cors())

app.use("/", student)

database.connect();

module.exports = app