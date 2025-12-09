import AppDataSource from "../config/datasource";
import { Persona } from "../entities/persona";

const repository = AppDataSource.getRepository(Persona);

export const verificarPersona = async (data: Partial<Persona>): Promise<Persona> => {
    return repository.findOne({
        where: {nombre: data.nombre}
    });
};
