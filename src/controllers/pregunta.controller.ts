import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as preguntaService from "../services/pregunta.service";


export const listarPreguntasPorCategoria = async (req: Request, res: Response) => {
    try {
        console.log('listarPreguntasPorCategoria');

        const { idCategoria } = req.params;

        const preguntas = await preguntaService.listarPreguntasPorCategoria(Number(idCategoria)    );

        res.json(BaseResponse.success(preguntas));

    } catch (error: any) {
        console.error('listarPreguntasPorCategoria:error', error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};

// POST
export const agregarPregunta = async (req: Request, res: Response) => {
    try {
        const pregunta = await preguntaService.agregarPregunta(req.body);
        res.status(201).json(
            new BaseResponse(true, "Pregunta agregada correctamente", pregunta)
        );
    } catch (error) {
        res.status(500).json(
            new BaseResponse(false, error.message, null)
        );
    }
};

// DELETE
export const eliminarPregunta = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await preguntaService.eliminarPregunta(Number(id));
        res.json(
            new BaseResponse(true, "Pregunta eliminada correctamente", null)
        );
    } catch (error) {
        res.status(500).json(
            new BaseResponse(false, "Error al eliminar pregunta", error)
        );
    }
};


///////////////////////////////////////////
/////////////////////////////

