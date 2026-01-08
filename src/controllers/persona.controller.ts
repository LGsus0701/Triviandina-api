import { Request, Response } from "express";
import * as personaService from "../services/persona.service";
import { BaseResponse } from "../shared/base-response";
import { Persona } from '../entities/persona';


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

export const listarPersona = async (req: Request, res: Response) => {
    console.log("➡️ Entró a listarPersonas");
    try {
        const personas = await personaService.listarPersona();
        return res.json(personas);
    } catch (error) {
        console.error('listarPersonas:error', error);
        res.status(500).json(BaseResponse.error(error.message));
    }       
}

export const crearPersona = async (req: Request, res: Response) => {
    console.log("➡️ Entró a crearPersona");
    try {
        const persona = await personaService.crearPersona(req.body);

        return res.status(201).json(
            BaseResponse.success(persona, 'Persona creada exitosamente')
        );
    } catch (error: any) {
        console.error('crearPersona:error', error);
        res.status(500).json(
            BaseResponse.error(error.message ?? 'Error al crear la persona'));
    }
}