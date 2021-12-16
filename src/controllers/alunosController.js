const alunos = require('../models/alunosSchema');

const getAll = async(req, res) => {
    try{
        const listarAlunos = await alunos.find();
        res.status(200).json({
            message: "Usuario encontrado com sucesso",
            listarAlunos
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports ={
    getAll,
}