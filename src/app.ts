import express, { Request, Response } from "express";
import cors from "cors";
import morgan from 'morgan';

import esdutiantesRoutes from './routes/estudiantesRoutes'
import profesoresRoutes from './routes/profesoresRoutes'
import cursosRoutes from './routes/cursosRoutes'

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/estudiantes', esdutiantesRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/cursos', cursosRoutes)

app.get('/', (req: Request, res: Response) => {
    console.log("Hola desde el home")
    res.send("Hola desde Home")
})

export default app;