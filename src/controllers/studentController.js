const StudentSchema = require('../models/studentSchema');
const mongoose = require('mongoose');
const studentSchema = require('../models/studentSchema');

const getAll = async(req, res) => {
    try{
        const students = await StudentSchema.find();
        res.status(200).json({
            message: "Usuario encontrado com sucesso",
            students
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

const newRegister = async (req, res) => {
    try {
        const student = new StudentSchema({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            _id: new mongoose.Types.ObjectId()
        })

        const newStudent = await student.save()
        res.status(201).json({
            student: newStudent,
        })

    } catch(error) {
        res.status(500).json({
            mensagem: error.message,
        })
    }
}



module.exports ={
    getAll,
    newRegister
}