import AppDataSource from "../config/datasource";
import { Categoria } from "../entities/categoria";

export const listarCategoria = async (data: Partial<Categoria>) => {
    const repo = AppDataSource.getRepository(Categoria);
    return await repo.find();
};
