import { Router } from "express";
import { methods as SimilControllers } from "./../controllers/seguridad.controller";


// RUTAS PARA MANDAR A LLAMAR LAS APIS DEL ARCHIVO SEGURIDAD.CONTROLLER.JS
const router = Router();
router.get('/:PV_ACCION', SimilControllers.getSeguridadSing );
router.post('/', SimilControllers.addSeguridad );
router.put('/', SimilControllers.updateSeguridad );
export default router;