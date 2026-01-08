
import AppDataSource from "../config/datasource";
import { Pregunta } from "../entities/pregunta";
import { Categoria } from "../entities/categoria";


const repository = AppDataSource.getRepository(Pregunta);
const categoriaRepository = AppDataSource.getRepository(Categoria);


export const listarPreguntasPorCategoria = async (idCategoria: number) => {
    return repository.find({
        where:{
            estadoAuditoria: '1',
            categoria: { 
                idCategoria 

            }
        },
         relations: ['opciones'] // 🔥 CLAVE
    });
}

// AGREGAR PREGUNTA
export const agregarPregunta = async (data: any) => {
    const categoria = await categoriaRepository.findOne({
        where: { idCategoria: data.idCategoria }
    });

    if (!categoria) {
        throw new Error("Categoría no encontrada");
    }

    const pregunta = repository.create({
        pregunta: data.pregunta,
        urlImagen: data.urlImagen,
        dificultad: data.dificultad,
        estadoAuditoria: data.estadoAuditoria,
        categoria
    });

    return repository.save(pregunta);
};

// ELIMINAR PREGUNTA
export const eliminarPregunta = async (id: number) => {
    return repository.delete(id);
};

///////////////////////////////////////////////
///////////////////////////////////////////////////

