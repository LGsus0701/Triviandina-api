"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pregunta_controller_1 = require("../controllers/pregunta.controller");
const router = (0, express_1.Router)();
//get listar preguntas
router.get('/categoria/:idCategoria', pregunta_controller_1.listarPreguntasPorCategoria);
router.post("/", pregunta_controller_1.agregarPregunta);
router.delete("/:id", pregunta_controller_1.eliminarPregunta);
//opcion
exports.default = router;
//# sourceMappingURL=pregunta.route.js.map