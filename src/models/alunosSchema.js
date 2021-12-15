const mongoose = require('mongoose');// para conectar com o banco de dados

const usersSchema = new mongoose.Schema({
   
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
    }
} , {timestamps: true})

const Users = mongoose.model("User", usersSchema);

module.exports = Users