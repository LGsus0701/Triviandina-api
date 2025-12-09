"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pregunta_controller_1 = require("../controllers/pregunta.controller");
const router = (0, express_1.Router)();
//get listar preguntas
router.get('/listar', pregunta_controller_1.listarPregunta);
//get listar preguntas por categoria
router.get('/categoria/:idCategoria', pregunta_controller_1.listarPreguntaPorCategoria);
exports.default = router;
//# sourceMappingURL=pregunta.route.js.map