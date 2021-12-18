const mongoose = require('mongoose'); // para conectar com o banco de dados

const coursesSchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    stack: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },

}, {
    timestamps: true,
    select: false
})


const Courses = mongoose.model("Courses", coursesSchema);

module.exports = Courses;

