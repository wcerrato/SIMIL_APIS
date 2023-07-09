import { Router } from "express";
import { methods as SimilControllers } from "./../controllers/seguridad.controller";
import { methods as facturaControllers } from "./../controllers/factura.controller";

// RUTAS PARA MANDAR A LLAMAR LAS APIS DEL ARCHIVO SEGURIDAD.CONTROLLER.JS
const router = Router();

router.get('/:PV_ACCION', SimilControllers.getSeguridadSing );
router.post('/', SimilControllers.addSeguridad );
router.put('/', SimilControllers.updateSeguridad );

router.get('/facturas/:PV_ACCION', facturaControllers.getFactura);
router.post('/facturas/', facturaControllers.addFactura);
router.put('/facturas/', facturaControllers.updateFactura);
export default router;