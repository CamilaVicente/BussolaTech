const mongoose = require('mongoose');


const MONGODB_URI = process.env.MONGODB_URI


// alt+z
// <password> = MINHA SENHA

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado, Até que enfim!!!!!!!!!!!!")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    connect
}