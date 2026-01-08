"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_controller_1 = require("../controllers/persona.controller");
const router = (0, express_1.Router)();
//GET / --- > listarPersonas
//POST / ---> insertarPersona
//GET /{idPersona} ---> Obtener persona
//PUT /{idPersona} ---> Editar Persona
router.post('/verificar', persona_controller_1.verificarPersona);
router.post('/crear', persona_controller_1.crearPersona);
router.get('/listar', persona_controller_1.listarPersona);
exports.default = router;
//# sourceMappingURL=persona.route.js.map