import {    Router } from "express";
import { listarCategorias } from '../controllers/categoria.controller';

const router: Router = Router();

//GET / --- > listarCategoria
router.get('/', listarCategorias);

export default router;