import { Router } from 'express';
import { listarPreguntasPorCategoria, agregarPregunta, eliminarPregunta } from '../controllers/pregunta.controller';


const router: Router = Router();
//get listar preguntas
router.get('/categoria/:idCategoria', listarPreguntasPorCategoria);

router.post("/", agregarPregunta);
router.delete("/:id", eliminarPregunta);

//opcion


export default router;