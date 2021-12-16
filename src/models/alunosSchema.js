const mongoose = require('mongoose');// para conectar com o banco de dados

const usersSchema = new mongoose.Schema({
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
    idade: {
        type: Number,
        required: true
    },
} , {timestamps: true})


module.exports = mongoose.model("aluno", usersSchema)