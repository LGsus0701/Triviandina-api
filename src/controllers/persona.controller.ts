import { Request, Response } from "express";
import * as personaService from "../services/persona.service";
import { BaseResponse } from "../shared/base-response";

export const verificarPersona = async (req: Request, res: Response) => {
    console.log("➡️ Entró a verificarPersona");
    
    try {
        const data = req.body;
        const persona = await personaService.verificarPersona(data);
        if(!persona){
            res.status(404).json(BaseResponse.error('No se puedo crear datos'));
            return;
        }
        res.json(BaseResponse.success(persona));
    } catch (error) {
        console.error('verificarPersona:error',error);
        res.status(500).json(BaseResponse.error(error.message));
    }
}

// POST
export const agregarPersona = async (req: Request, res: Response) => {
    try {
        const persona = await personaService.agregarPersona(req.body);
        res.status(201).json(
            new BaseResponse(true, "Persona agregada correctamente", persona)
        );
    } catch (error) {
        res.status(500).json(
            new BaseResponse(false, "Error al agregar persona", error)
        );
    }
};

// DELETE
export const eliminarPersona = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await personaService.eliminarPersona(Number(id));
        res.json(
            new BaseResponse(true, "Persona eliminada correctamente", null)
        );
    } catch (error) {
        res.status(500).json(
            new BaseResponse(false, "Error al eliminar persona", error)
        );
    }
};
