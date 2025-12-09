import 'dotenv/config'
import express, { Application, json } from "express";
import personaRouter from './routes/persona.route';
import categoriaRouter from './routes/categoria.route';
import preguntaRouter from './routes/pregunta.route';

const app: Application = express();

app.use(json());
app.use('/api/v1/personas', personaRouter);
app.use('/api/v1/categorias', categoriaRouter);
app.use('/api/v1/preguntas', preguntaRouter);
export default app;
