import { Request, Response } from "express";
import { BaseResponse } from "../shared/base-response";
import * as categoriaService from "../services/categoria.service";

export const listarCategorias = async (req: Request, res: Response) => {
    try {
        console.log("listarCategorias");

        const categorias = await categoriaService.listarCategorias();

        res.json(BaseResponse.success(categorias));
    } catch (error: any) {
        console.error("listarCategorias:error", error);
        res.status(500).json(BaseResponse.error(error.message));
    }
};
