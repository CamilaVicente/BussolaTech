const Students = require('../models/studentSchema');



//GET/todo //Rota que retorna uma lista com todos os itens 
const searchAll = async (req, res) => {
    try {
        const students = await Students.find();
        res.status(200).json({
            message: "Usuarios encontrados com sucesso",
            students
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
//GET/:id //Rota que retorna os detalhes sobre algum item, baseado no seu id.

const searchForId = async (req, res) => {
    try {
        const studentId = await Students.findById(req.params.id)
        res.status(200).json(studentId)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
}
//POST //Rota que recebe um novo item, adicioná e retorna o item criado
const registerStudent = async (req, res) => {
    try {
        const student = new Students(req.body);

        const newStudent = await student.save()
        res.status(201).json({
            mensagem: "Cadastro criado com sucesso",
            student: newStudent,
        })

    } catch (error) {
        res.status(500).json({
            mensagem: error.message,
        })
    }
}


//PUT/:id //Rota que atualiza algum dado e retorna o atualizado.

const updateStudent = async (req, res) => {
    try {
        const updateStudent = await Students.findById(req.params.id);

        if (updateStudent) {

            updateStudent.name = req.body.name || updateStudent.name
            updateStudent.email = req.body.email || updateStudent.email
            updateStudent.password = req.body.password || updateStudent.password

            const saveStudent = await updateStudent.save();
            res.status(200).json({
                message: "Usuário atualizado com sucesso",
                saveStudent
            })
        }
        res.status(400).json({
            mensagem: "Usuário não encontrado"
        })
    } catch (error) {
        return res.status(404).send({
            message: error.message
        });
    }
}

//Delete/:id //Rota que deleta um item baseado em seu id.
const deleteStudent = async (req, res) => {
    try {
        const deleteStudent = await Students.findById(req.params.id);

        if (deleteStudent == null) {
            res.status(404).json({
                message: "Usuário não encontrado."
            })
        }
        await deleteStudent.delete();
        res.status(200).json({
            message: "Cadastro deletado com sucesso."
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}



module.exports = {
    searchAll,
    registerStudent,
    searchForId,
    updateStudent,
    deleteStudent
}