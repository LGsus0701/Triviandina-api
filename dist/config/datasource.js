"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const persona_1 = require("../entities/persona");
const categoria_1 = require("../entities/categoria");
const pregunta_1 = require("../entities/pregunta");
console.log('AppDataSource', {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        persona_1.Persona,
        categoria_1.Categoria,
        pregunta_1.Pregunta
    ]
});
exports.default = AppDataSource;
//# sourceMappingURL=datasource.js.map