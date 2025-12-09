import {    Router } from "express";
import { listarCategoria } from '../controllers/categoria.controller';

const router: Router = Router();

//GET / --- > listarCategoria
router.get('/listar', listarCategoria);

export default router;