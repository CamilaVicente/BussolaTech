require('dotenv-safe').config()

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const database = require('./database/mongoConfig')
const student = require("./routes/studentRoutes")
const courses = require('./routes/coursesRoutes');
const { use } = require('./routes/coursesRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.json())
app.use(cors())

app.use("/students", student);
app;use('/courses', courses)

database.connect();

module.exports = app