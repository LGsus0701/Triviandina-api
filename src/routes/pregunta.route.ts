import { Router } from 'express';
import { listarPregunta, listarPreguntaPorCategoria } from '../controllers/pregunta.controller';

const router: Router = Router();
//get listar preguntas
router.get('/listar', listarPregunta);
//get listar preguntas por categoria
router.get('/categoria/:idCategoria', listarPreguntaPorCategoria);

export default router;
