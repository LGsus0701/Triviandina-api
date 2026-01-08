import { Router } from "express";
import { verificarPersona, agregarPersona,eliminarPersona} from '../controllers/persona.controller';



const router: Router = Router();

//GET / --- > listarPersonas
//POST / ---> insertarPersona
//GET /{idPersona} ---> Obtener persona
//PUT /{idPersona} ---> Editar Persona

router.post('/verificar', verificarPersona);
router.post("/", agregarPersona);
router.delete("/:id", eliminarPersona);

export default router;