const mongoose = require('mongoose');// para conectar com o banco de dados

const studentSchema = new mongoose.Schema({
    
    id: mongoose.Schema.Types.ObjectId,
   
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,// tipo do dado
        required: true, // é obrigatório
        unique: true// unico
    },
    age: {
        type: Number,
        required: true
    },
} , {timestamps: true})


module.exports = mongoose.model("student", studentSchema)