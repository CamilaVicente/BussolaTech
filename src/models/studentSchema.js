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
        unique: true,// unico
        lowercase:true// converte em caixa baixa
    },
    password:{
        type: String,
        required: true,
        select: false //pra quando buscar no bd essa informação não vir na consulta
    }
} , {timestamps: true})


const Students = mongoose.model("Students", studentSchema);

module.exports = Students;