const Courses = require("../models/coursesSchema");
const mongoose = require('mongoose');


const getAll = async (req, res) => {
    try {
        const courses = await Courses.find();
        res.status(200).json({
            message: "Cursos cadastrados na plataforma",
            courses
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const searchName = (req, res) => {
    try {
        let nameReq = Courses(req.query.name.toLocaleLowerCase());

        let courserEnc = Courses.find((courses) => courses.name.toLocaleLowerCase().includes(nameReq));

        if (courserEnc.length === 0) {
            res.status(400).json([{
                mensagem: "Curso não encontrado"
            }]);
        }
        res.status(200).send(courserEnc)
    } catch (error) {
        return res.status(404).send({
            message: error.message
        });

    }

}

const newCourse = async (req, res) => {
    try {
        const courses = new Courses(req.body);

        const newCourse = await courses.save()
        res.status(201).json({
            mensagem: "Curso cadastrado com sucesso",
            courses: newCourse,
        })

    } catch (error) {
        res.status(500).json({
            mensagem: error.message,
        })
    }
}
const updateCourse = async (req, res) => {
    try {
        const updateCourse = await Courses.findById(req.params.id);

        if (updateCourse) {

            updateCourse.name = req.body.name || updateCourse.name
            updateCourse.link = req.body.link || updateCourse.link
            updateCourse.stack = req.body.stack || updateCourse.stack
            updateCourse.description = req.body.description || updateCourse.description

            const saveCourse = await updateStudent.save();
            res.status(200).json({
                message: "Informações atualizadas com sucesso",
                saveCourse
            })
        }
        res.status(400).json({
            mensagem: "Curso não encontrado"
        })
    } catch (error) {
        return res.status(404).send({
            message: error.message
        });
    }
}

//Delete/:id //Rota que deleta um item baseado em seu id.
const deleteC = async (req, res) => {
    try {
        const deleteC = await Courses.findById(req.params.id);

        if (deleteC == null) {
            res.status(404).json({
                message: "Cadastro não encontrado."
            })
        }
        await deleteC.delete();
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
    getAll,
    searchName,
    updateCourse,
    deleteC,
    newCourse
}

/*const searchName = async (req, res)=>{

    const {name , stack} = req.query

    const courses = Courses.find();
   

    if(name){
        courses = courses.filter(courses =>{
            return courses.name.toLocaleLowerCase().includes(name)
        })
    }
    if(stack){
        courses = courses.filter(courses =>{
            return courses.stack.toLocaleLowerCase().includes(stack)
        })
    }
    res.status(200).send(courses)
    
}*/