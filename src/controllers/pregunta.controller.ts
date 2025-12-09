import { BaseResponse } from "../shared/base-response";
import * as preguntaService from '../services/pregunta.service';
import { Request, Response } from "express";

export const listarPregunta = async (req: Request, res: Response) => {
    console.log("➡️ Se muestra a ListarPregunta");

    try {
        const data = req.body;
        const pregunta = await preguntaService.listarPregunta(data);
        if(!pregunta){
            res.status(404).json(BaseResponse.error('No se puedo crear datos'));
            return;
        }
        res.json(BaseResponse.success(pregunta));
    } catch (error) {
        console.error('ListarPregunta:error',error);
        res.status(500).json(BaseResponse.error(error.message));
    }    
}  

//listar preguntas por categoria

export const listarPreguntaPorCategoria = async (req: Request, res: Response) => {
    console.log("➡️ Se muestra a ListarPreguntaPorCategoria");

    try {
        const idCategoria = Number(req.params.idCategoria);

        const pregunta = await preguntaService.listarPreguntaPorCategoria(idCategoria);

        if(pregunta.length === 0){
            return res.status(404).json(BaseResponse.error('No se encontraron preguntas para la categoría especificada'));
        }

        res.json(BaseResponse.success(pregunta));

    } catch (error: any) {
        console.error('ListarPreguntaPorCategoria:error',error);
        res.status(500).json(BaseResponse.error(error.message));
    
    }
}