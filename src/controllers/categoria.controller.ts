import { BaseResponse } from '../shared/base-response';
import * as categoriaService from '../services/categoria.service';
import { Request, Response } from 'express';

export const listarCategoria = async (req: Request, res: Response) => {
    console.log("➡️ Se muestra a listarCategoria");

    try {
        const data = req.body;
        const categoria = await categoriaService.listarCategoria(data);
        if(!categoria){
            res.status(404).json(BaseResponse.error('No se puedo crear datos'));
            return;
        }
        res.json(BaseResponse.success(categoria));
    } catch (error) {
        console.error('listarCategoria:error',error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}