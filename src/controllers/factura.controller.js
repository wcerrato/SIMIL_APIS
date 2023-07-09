import { getConnection } from "../database/database";

//API PARA SELECCIONAR DATOS DEL MODULO DE FACTURA
const getFactura = async (req, res) => {
  try {
    console.log(req.params);
    const { PV_ACCION } = req.params;
    const connection = await getConnection();
    const result = await connection.query('CALL F_SEL_FACTURA (?) ', PV_ACCION);
    res.json(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// API PARA INSERTAR DATOS DEL MODULO DE FACTURA DEL PROCEDIMIENTO ALMACENADO INS_FACTURA
const addFactura = async (req, res) => {
  try {
    //parametros de las tablas del módulo factura
    const {
      PV_ACCION, PE_ESTADO, PE_TIPO_FACTURA, PB_COD_CLIENTE, PV_COD_USUARIO, PB_NUM_FACTURA, PE_ESTADO_FACTURA, PB_COD_FORMA_PAGO 
      ,PE_DIAS_CREDITO, PB_COD_TALONARIO_CAI, PB_COD_DESCUENTO, PI_NUM_ORDEN_COMPRA_EXENTA, PI_NUM_CONSTANCIA_REGISTRO_EXONERADOS, PI_NUM_REGISTRO_SAG 
      ,PB_COD_PRODUCCION, PD_PRECIO_VENTA, PI_CAN_PRODUCTO, PD_IMPORTE
      ,PI_RANGO_INICIAL, PI_RANGO_FINAL, PI_RANGO_ACTUAL, PF_FEC_VENCIMIENTO, PI_NUM_CAI
      ,PV_NOM_DESC, PD_PORCENTAJE_DESCONTAR 
      ,PB_COD_FACTURA, PD_TOT_DESCONTADO, PD_TOTAL 
      ,PV_NOM_FORMA_PAGO 
    } = req.body;
    const connection = await getConnection();
    await connection.query(
      'CALL F_INS_FACTURA(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [ // Parametro recibidos en el procedimiento
      PV_ACCION, PE_ESTADO, PE_TIPO_FACTURA, PB_COD_CLIENTE, PV_COD_USUARIO, PB_NUM_FACTURA, PE_ESTADO_FACTURA, PB_COD_FORMA_PAGO 
      ,PE_DIAS_CREDITO, PB_COD_TALONARIO_CAI, PB_COD_DESCUENTO, PI_NUM_ORDEN_COMPRA_EXENTA, PI_NUM_CONSTANCIA_REGISTRO_EXONERADOS, PI_NUM_REGISTRO_SAG 
      ,PB_COD_PRODUCCION, PD_PRECIO_VENTA, PI_CAN_PRODUCTO, PD_IMPORTE
      ,PI_RANGO_INICIAL, PI_RANGO_FINAL, PI_RANGO_ACTUAL, PF_FEC_VENCIMIENTO, PI_NUM_CAI
      ,PV_NOM_DESC, PD_PORCENTAJE_DESCONTAR 
      ,PB_COD_FACTURA, PD_TOT_DESCONTADO, PD_TOTAL 
      ,PV_NOM_FORMA_PAGO 
]);
    
    res.json("Datos ingresados con exito");
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

//API PARA ACTUALIZAR DATOS DEL MODULO FACTURA POR MEDIO DE UN PARAMETRO
  const updateFactura = async (req, res) => {
    try {
      // parametros de las tablas del módulo factura
      const {
        
        
      PV_ACCION, PE_ESTADO, PE_TIPO_FACTURA, PB_COD_CLIENTE, PV_COD_USUARIO, PB_NUM_FACTURA, PE_ESTADO_FACTURA, PB_COD_FORMA_PAGO 
      ,PE_DIAS_CREDITO, PB_COD_TALONARIO_CAI, PB_COD_DESCUENTO, PI_NUM_ORDEN_COMPRA_EXENTA, PI_NUM_CONSTANCIA_REGISTRO_EXONERADOS, PI_NUM_REGISTRO_SAG 
      ,PB_COD_DETALLE_FACTURA, PB_COD_PRODUCCION, PD_PRECIO_VENTA, PI_CAN_PRODUCTO, PD_IMPORTE
      ,PI_RANGO_INICIAL, PI_RANGO_FINAL, PI_RANGO_ACTUAL, PF_FEC_VENCIMIENTO, PI_NUM_CAI
      ,PV_NOM_DESC, PD_PORCENTAJE_DESCONTAR 
      ,PB_COD_FACTURA_DESCUENTO, PB_COD_FACTURA, PD_TOT_DESCONTADO, PD_TOTAL 
      ,PV_NOM_FORMA_PAGO 
      } = req.body;
      const connection = await getConnection();
      await connection.query(
        'CALL F_UPD_FACTURA (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
       
        [ // Parametro recibidos en el procedimiento
   
        PV_ACCION, PE_ESTADO, PE_TIPO_FACTURA, PB_COD_CLIENTE, PV_COD_USUARIO, PB_NUM_FACTURA, PE_ESTADO_FACTURA, PB_COD_FORMA_PAGO 
        ,PE_DIAS_CREDITO, PB_COD_TALONARIO_CAI, PB_COD_DESCUENTO, PI_NUM_ORDEN_COMPRA_EXENTA, PI_NUM_CONSTANCIA_REGISTRO_EXONERADOS, PI_NUM_REGISTRO_SAG 
        ,PB_COD_DETALLE_FACTURA, PB_COD_PRODUCCION, PD_PRECIO_VENTA, PI_CAN_PRODUCTO, PD_IMPORTE
        ,PI_RANGO_INICIAL, PI_RANGO_FINAL, PI_RANGO_ACTUAL, PF_FEC_VENCIMIENTO, PI_NUM_CAI
        ,PV_NOM_DESC, PD_PORCENTAJE_DESCONTAR 
        ,PB_COD_FACTURA_DESCUENTO, PB_COD_FACTURA, PD_TOT_DESCONTADO, PD_TOTAL 
        ,PV_NOM_FORMA_PAGO 
  ]);
      
      res.json("Datos actualizados con exito");
      } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
  };


export const methods = {
    addFactura,
    getFactura,
    updateFactura
};
