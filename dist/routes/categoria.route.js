"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoria_controller_1 = require("../controllers/categoria.controller");
const router = (0, express_1.Router)();
//GET / --- > listarCategoria
router.get('/', categoria_controller_1.listarCategorias);
exports.default = router;
//# sourceMappingURL=categoria.route.js.map