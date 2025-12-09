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
exports.verificarPersona = void 0;
const datasource_1 = __importDefault(require("../config/datasource"));
const persona_1 = require("../entities/persona");
const repository = datasource_1.default.getRepository(persona_1.Persona);
const verificarPersona = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return repository.findOne({
        where: { nombre: data.nombre }
    });
});
exports.verificarPersona = verificarPersona;
//# sourceMappingURL=persona.service.js.map