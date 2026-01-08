import AppDataSource from "../config/datasource";
import { Persona } from "../entities/persona";

const repository = AppDataSource.getRepository(Persona);

export const verificarPersona = async (data: Partial<Persona>): Promise<Persona> => {
    return repository.findOne({
        where: {nombre: data.nombre}
    });
};

// AGREGAR PERSONA
export const agregarPersona = async (data: Partial<Persona>) => {
    const persona = repository.create(data);
    return repository.save(persona);
};

// ELIMINAR PERSONA
export const eliminarPersona = async (id: number) => {
    return repository.delete(id);
};