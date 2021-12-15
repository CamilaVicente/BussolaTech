const express = require("express");
const router = express.Router();
const controller = require("../controllers/alunosController");

router.get("/all", controller.getAll)

module.exports = router;



/*GET - consulta
POST - create/criar
PUT - modifica/ Substituir
PATCH - modifica/ parcialmente
DELETE - Excluir*/ 