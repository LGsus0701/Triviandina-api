"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarPregunta = exports.agregarPregunta = exports.listarPreguntasPorCategoria = void 0;
const datasource_1 = __importDefault(require("../config/datasource"));
const pregunta_1 = require("../entities/pregunta");
const categoria_1 = require("../entities/categoria");
const repository = datasource_1.default.getRepository(pregunta_1.Pregunta);
const categoriaRepository = datasource_1.default.getRepository(categoria_1.Categoria);
const listarPreguntasPorCategoria = (idCategoria) => __awaiter(void 0, void 0, void 0, function* () {
    return repository.find({
        where: {
            estadoAuditoria: '1',
            categoria: {
                idCategoria
            }
        },
        relations: ['opciones'] // 🔥 CLAVE
    });
});
exports.listarPreguntasPorCategoria = listarPreguntasPorCategoria;
// AGREGAR PREGUNTA
const agregarPregunta = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const categoria = yield categoriaRepository.findOne({
        where: { idCategoria: data.idCategoria }
    });
    if (!categoria) {
        throw new Error("Categoría no encontrada");
    }
    const pregunta = repository.create({
        pregunta: data.pregunta,
        urlImagen: data.urlImagen,
        dificultad: data.dificultad,
        estadoAuditoria: data.estadoAuditoria,
        categoria
    });
    return repository.save(pregunta);
});
exports.agregarPregunta = agregarPregunta;
// ELIMINAR PREGUNTA
const eliminarPregunta = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return repository.delete(id);
});
exports.eliminarPregunta = eliminarPregunta;
///////////////////////////////////////////////
///////////////////////////////////////////////////
//# sourceMappingURL=pregunta.service.js.map