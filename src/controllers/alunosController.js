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
const newRegister = async (req, res) => {
    try {
        const musica = new MusicaSchema({
            artista: req.body.artista,
            titulo: req.body.titulo,
            album: req.body.album,
            ano: req.body.ano,
            _id: new mongoose.Types.ObjectId()
        })

        const musicaSalva = await musica.save()
        res.status(201).json({
            musica: musicaSalva,
        })

    } catch(error) {
        res.status(500).json({
            mensagem: error.message,
        })
    }
}



module.exports ={
    getAll,
}