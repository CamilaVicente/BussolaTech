const express = require("express");
const router = express.Router();
const controller = require("../controllers/studentController");

router.get("/all", controller.searchAll)
router.get("/search/:id", controller.searchForId)
router.post("/register", controller.registerStudent)
router.put("/update/:id", controller.updateStudent)
router.delete("/delete/:id", controller.deleteStudent)

module.exports = router



/*GET - consulta
POST - create/criar
PUT - modifica/ Substituir
PATCH - modifica/ parcialmente
DELETE - Excluir*/ 