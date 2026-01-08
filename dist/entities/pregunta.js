"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pregunta = void 0;
const typeorm_1 = require("typeorm");
const categoria_1 = require("./categoria");
const opcion_1 = require("./opcion");
let Pregunta = class Pregunta {
};
exports.Pregunta = Pregunta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_pregunta' }),
    __metadata("design:type", Number)
], Pregunta.prototype, "idPregunta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categoria_1.Categoria),
    (0, typeorm_1.JoinColumn)({ name: "id_categoria" }),
    __metadata("design:type", categoria_1.Categoria)
], Pregunta.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'pregunta', type: 'text' }),
    __metadata("design:type", String)
], Pregunta.prototype, "pregunta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'url_imagen' }),
    __metadata("design:type", String)
], Pregunta.prototype, "urlImagen", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dificultad' }),
    __metadata("design:type", String)
], Pregunta.prototype, "dificultad", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'estado_auditoria' }),
    __metadata("design:type", String)
], Pregunta.prototype, "estadoAuditoria", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => opcion_1.Opcion, opcion => opcion.pregunta),
    __metadata("design:type", Array)
], Pregunta.prototype, "opciones", void 0);
exports.Pregunta = Pregunta = __decorate([
    (0, typeorm_1.Entity)('preguntas')
], Pregunta);
//# sourceMappingURL=pregunta.js.map