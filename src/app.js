require('dotenv-safe').config()

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const database = require('./database/mongoConfig')
const student = require("./routes/studentRoutes")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.json())
app.use(cors())

app.use("/students", student)

database.connect();

module.exports = app