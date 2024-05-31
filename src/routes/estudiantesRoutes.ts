import express from 'express'
const router = express.Router();
import EstudiantesController from '../controllers/estudiantesControllers'

router.get('/', EstudiantesController.consultar)

router.post('/', EstudiantesController.ingresar)

router.route("/:id")
    .get(EstudiantesController.consultarDetalle)

    .put(EstudiantesController.actualizar)

    .delete(EstudiantesController.borrar)

export default router;