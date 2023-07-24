import { Router } from "express";
import { methods as SimilControllers } from "./../controllers/seguridad.controller";
import { methods as facturaControllers } from "./../controllers/factura.controller";
import { methods as InventarioControllers } from "./../controllers/inventario.controller";
import { methods as PersonaControllers } from "./../controllers/persona.controller";
import { methods as ReporteControllers } from "./../controllers/reportes.controller";
import { methods as comprascontrollers } from "../controllers/compras.controller";
import { methods as logincontrollers } from "../controllers/login.controller";

// RUTAS PARA MANDAR A LLAMAR LAS APIS DEL ARCHIVO SEGURIDAD.CONTROLLER.JS
const router = Router();

router.get('/:PV_ACCION', SimilControllers.getSeguridadSing );
router.post('/', SimilControllers.addSeguridad );
router.put('/', SimilControllers.updateSeguridad );

// RUTAS PARA MANDAR A LLAMAR LAS APIS DEL ARCHIVO FACTURA.CONTROLLER.JS
router.get('/facturas/:PV_ACCION', facturaControllers.getFactura);
router.post('/facturas/', facturaControllers.addFactura);
router.put('/facturas/', facturaControllers.updateFactura);

// RUTAS PARA MANDAR A LLAMAR LAS APIS DEL ARCHIVO INVENTARIO.CONTROLLER.JS
router.get('/Inventario/:PV_ACCION', InventarioControllers.getInventarioSing );
router.post('/Inventario/', InventarioControllers.addInventario );
router.put('/Inventario/', InventarioControllers.updateInventario );

// RUTAS PARA MANDAR A LLAMAR LAS APIS DEL ARCHIVO PERSONA.CONTROLLER.JS
router.get('/Persona/:PV_ACCION', PersonaControllers.getPersonaSing );
router.post('/Persona/', PersonaControllers.addPersona );
router.put('/Persona/', PersonaControllers.updatePersona);

// RUTAS COMPRAS

router.get('/compras/:PV_ACCION', comprascontrollers.getcompras);
router.post('/compras/', comprascontrollers.addcompras);
router.put('/compras/', comprascontrollers.updatecompras);

// RUTAS PARA MANDAR A LLAMAR LAS APIS DEL ARCHIVO REPORTES.CONTROLLER.JS
router.get('/reportes/:PV_ACCION', ReporteControllers.getReportes);

//RUTA PARA TOKEN 
router.get('/', logincontrollers.getLogin);


export default router;

