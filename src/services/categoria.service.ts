import AppDataSource from "../config/datasource";
import { Categoria } from "../entities/categoria";

const repository = AppDataSource.getRepository(Categoria);

export const listarCategorias = async () => {
    return repository.find({
        where:{
            estadoAuditoria: '1'
        }
    });
}
