import { Request, Response } from "express";


class CursosController {
    constructor() {

    }

    consultar(req: Request, res: Response) {
        try {
            res.send("Consultar")
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }

    consultarDetalle(req: Request, res: Response) {
        const { id } = req.params;
        console.log("hola desde controlles de Cursos")
        try {
            res.send("Consultar detalle")
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }


    ingresar(req: Request, res: Response) {
        const { nombre, descripcion, profesor_id } = req.body;

        try {
            res.send("Ingresar")
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }

    }

    actualizar(req: Request, res: Response) {
        const { id } = req.params
        const { nombre, descripcion, profesor_id } = req.body;

        try {
            res.send("Actualizar")
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }

    borrar(req: Request, res: Response) {
        const { id } = req.params

        try {
            res.send("Borrar")
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }

    registrarEstudiante(req: Request, res: Response) {
        const { curso_id, estudiante_id } = req.body;

        try {
            res.send("Registrar estudiante")
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).send(error.message)
            }
        }
    }

}

export default new CursosController;