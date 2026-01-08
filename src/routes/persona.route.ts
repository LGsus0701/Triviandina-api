import { Router } from "express";
import { crearPersona, listarPersona, verificarPersona } from '../controllers/persona.controller';



const router: Router = Router();

//GET / --- > listarPersonas
//POST / ---> insertarPersona
//GET /{idPersona} ---> Obtener persona
//PUT /{idPersona} ---> Editar Persona

router.post('/verificar', verificarPersona);
router.post('/crear', crearPersona);
router.get('/listar', listarPersona);

export default router;