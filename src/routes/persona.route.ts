import { Router } from "express";
import { verificarPersona } from '../controllers/persona.controller';


const router: Router = Router();

//GET / --- > listarPersonas
//POST / ---> insertarPersona
//GET /{idPersona} ---> Obtener persona
//PUT /{idPersona} ---> Editar Persona

router.post('/verificar', verificarPersona);

export default router;