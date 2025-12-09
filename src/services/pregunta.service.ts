import { promises } from "dns";
import AppDataSource from "../config/datasource";
import { Pregunta } from "../entities/pregunta";

export const listarPregunta = async (data: Partial<Pregunta>): Promise<Pregunta[]> => {
    const repo = AppDataSource.getRepository(Pregunta);
    return await repo.find();
}

export const listarPreguntaPorCategoria = async (idCategoria: number) => {
    const repo = AppDataSource.getRepository(Pregunta);
    
    return await repo.find({
        where: { idCategoria }
    });
}