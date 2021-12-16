const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentController");

router.get("/all", controller.getAll)
router.post("/newRegister", controller.newRegister)

module.exports = router



/*GET - consulta
POST - create/criar
PUT - modifica/ Substituir
PATCH - modifica/ parcialmente
DELETE - Excluir*/ 