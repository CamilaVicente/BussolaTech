const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentController");

router.get("/all", controller.searchAll)
router.post("/newRegister", controller.newRegister)
router.get("/search/:id", controller.searchForId)

module.exports = router



/*GET - consulta
POST - create/criar
PUT - modifica/ Substituir
PATCH - modifica/ parcialmente
DELETE - Excluir*/ 