const express = require("express");
const router = express.Router();
const controller = require("../controllers/coursesController");

router.get("/all", controller.getAll)
router.get("/?name", controller.search)
router.get("/?stack", controller.search)
router.post("/newRegister", controller.newCourse)
router.put("/update", controller.updateCourse)
router.delete("/delete/:id", controller.deleteC)

module.exports = router


/*
[GET]/cursos - retornar todos os cursos
[GET]/cursos/:nome-do-curso - retorna curso de acordo com o nome
[GET]/cursos/:stack - retornar cursos de acordo com a stack específica (frontend, backend e fullstack)
[POST]/cursos - Incluir sugestão de novos cursos
[DELETE]/cursos/:id - Sugerir Exclusão de cursos obsoletos ou fora do ar
[PATCH]/cursos/:id - Sugerir Atualização ou Alteração informações dos cursos
[PUT]/cursos/:id - Sugerir atualização ou Alteração informações dos cursos */