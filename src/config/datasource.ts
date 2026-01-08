import { DataSource } from "typeorm";
import { Persona } from "../entities/persona";
import { Categoria } from "../entities/categoria";
import { Pregunta } from "../entities/pregunta";
import { Opcion } from "../entities/opcion";


console.log('AppDataSource',{
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,})

    const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [
        Persona,
        Categoria,
        Pregunta,
        Opcion
        
    ]
});

export default AppDataSource;