import AppDataSource from "../config/datasource";
import { Persona } from "../entities/persona";

const repository = AppDataSource.getRepository(Persona);

export const verificarPersona = async (data: Partial<Persona>): Promise<Persona> => {
    return repository.findOne({
        where: {nombre: data.nombre}
    });
};

export const crearPersona = async (data: Partial<Persona>): Promise<Persona> => {
    const nuevaPersona = repository.create(data);
    return await repository.save(nuevaPersona);
}

export const listarPersona = async (): Promise<Persona[]> => {
    return await repository.find();
}
