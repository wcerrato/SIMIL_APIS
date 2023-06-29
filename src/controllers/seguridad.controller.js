import { getConnection } from "../database/database";
/*
//API PARA SELECCIONAR DATOS DEL MODULO DE SEGURIDAD
const getSeguridad = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query('SELECT * FROM TBL_MS_ROLES');
    res.json(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


  //API PARA ELIMINARR DATOS DEL MODULO DE SEGURIDAD POR MEDIO DE UN PARAMETRO
const deleteSeguridad = async (req, res) => {
    try {
      const { COD_ROL} = req.params;
      const connection = await getConnection();
      const result = await connection.query('DELETE FROM TBL_MS_ROLES WHERE COD_ROL = ?', COD_ROL);
      res.json("Dato Eliminados");
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };


      //API PARA ACTUALIZARDATOS DATOS DEL MODULO DE SEGURIDAD POR MEDIO DE UN PARAMETRO
const updateSeguridad = async (req, res) => {
    try {
      const { COD_ROL} = req.params;
      const { NOM_ROL, DES_ROL, ESTADO } = req.body;
      if (COD_ROL== undefined, NOM_ROL == undefined || DES_ROL == undefined || ESTADO == undefined){
        res.status(400).json({ message: " Bad request. no ha ingresado todos los datos." });
      }
      const roles = { COD_ROL, NOM_ROL, DES_ROL, ESTADO };
      const connection = await getConnection();
      const result = await connection.query('UPDATE TBL_MS_ROLES SET  ? WHERE COD_ROL = ?', [roles, COD_ROL] );
      res.json("Dato Actualizados");
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };



     try {
      const { PV_ACCION } = req.params;
      const {
        // Obtén los datos necesarios del cuerpo de la solicitud (req.body)
      } = req.body;
  
      const connection = await getConnection();
  
      // Realiza la consulta de actualización según el valor de PV_ACCION
      let result;
  
      if (PV_ACCION === 'roles') {
        // Ejemplo de actualización de la tabla TBL_MS_ROLES
        result = await connection.query(`
          CALL A_UPDATE_MODULO_SEGURIDAD('${PV_ACCION}', ${PB_COD_ROL}, '${PV_NOM_ROL}', '${PV_DES_ROL}', '${PE_ESTADO}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
        `);
      } else if (PV_ACCION === 'objetos') {
        // Ejemplo de actualización de la tabla TBL_MS_OBJETOS
        result = await connection.query(`
          CALL A_UPDATE_MODULO_SEGURIDAD('${PV_ACCION}', '${PV_ACCION}', NULL, NULL, NULL, '${PE_ESTADO}', ${PB_COD_OBJETO}, '${PV_OBJETO}', '${PV_DES_OBJETO}', '${PV_TIP_OBJETO}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
        `);
      } else if (PV_ACCION === 'permisos') {
        // Ejemplo de actualización de la tabla TBL_MS_PERMISOS
        result = await connection.query(`
          CALL A_UPDATE_MODULO_SEGURIDAD('${PV_ACCION}', '${PV_ACCION}', ${PB_COD_ROL}, NULL, NULL, '${PE_ESTADO}', ${PB_COD_OBJETO}, NULL, NULL, NULL, ${PB_COD_PERMISO}, '${PE_PER_INSERCION}', '${PE_PER_ELIMINACION}', '${PE_PER_ACTUALIZACION}', '${PE_PER_CONSULTAR}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
        `);
      } else if (PV_ACCION === 'preguntas') {
        // Ejemplo de actualización de la tabla TBL_MS_PREGUNTAS
        result = await connection.query(`
          CALL A_UPDATE_MODULO_SEGURIDAD('${PV_ACCION}', '${PV_ACCION}', NULL, NULL, NULL, '${PE_ESTADO}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, ${PB_COD_PREGUNTA}, '${PV_PREGUNTA}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
        `);
      } else if (PV_ACCION === 'respuesta') {
        // Ejemplo de actualización de la tabla TBL_MS_RESPUESTAS_USUARIO
        result = await connection.query(`
          CALL A_UPDATE_MODULO_SEGURIDAD('${PV_ACCION}', '${PV_ACCION}', NULL, NULL, NULL, '${PE_ESTADO}', NULL, NULL, NULL, NULL, NULL, NULL, ${PB_COD_RESPUESTA_USUARIO}, NULL, ${PB_COD_PREGUNTA}, '${PV_RESPUESTA}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
        `);
      } else if (PV_ACCION === 'parametros') {
        // Ejemplo de actualización de la tabla TBL_MS_PARAMETROS
        result = await connection.query(`
          CALL A_UPDATE_MODULO_SEGURIDAD('${PV_ACCION}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, ${PB_COD_PARAMETRO}, '${PV_PARAMETRO}', '${PV_VALOR}', '${PE_ESTADO}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
        `);
      } else if (PV_ACCION === 'usuarios') {
        // Ejemplo de actualización de la tabla TBL_MS_USUARIOS
        result = await connection.query(`
          CALL A_UPDATE_MODULO_SEGURIDAD('${PV_ACCION}', '${PV_ACCION}', NULL, NULL, NULL, '${PE_ESTADO}', NULL, ${PB_COD_USUARIO}, '${PV_NOMBRE_USUARIO}', '${PV_PASSWORD}', '${PV_EMAIL}', '${PV_TELEFONO}', '${PV_DIRECCION}', '${PV_CIUDAD}', '${PV_PAIS}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
        `);
      } else res.json({ message: "El objeto que esta queriedo actualizar es incorrecto" });
     
  
      res.json({ message: "Datos actualizados" });
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }

  */
//API PARA SELECCIONAR DATOS DEL MODULO DE SEGURIDAD DEL PROCEDIMIENTO A_SELECT_MODULO_SEGURIDAD
  const getSeguridadSing = async (req, res) => {
    try {
      console.log(req.params);
      const { PV_ACCION } = req.params;
      const connection = await getConnection();
  
      let query = '';
      let queryParams = [];
  
      if (PV_ACCION === 'roles') {
        query = 'CALL A_SELECT_MODULO_SEGURIDAD(?)';
        queryParams = ['roles'];
      } else if (PV_ACCION === 'objetos') {
        query = 'CALL A_SELECT_MODULO_SEGURIDAD(?)';
        queryParams = ['objetos'];
      } else if (PV_ACCION === 'permisos') {
        query = 'CALL A_SELECT_MODULO_SEGURIDAD(?)';
        queryParams = ['permisos'];
      } else if (PV_ACCION === 'preguntas') {
        query = 'CALL A_SELECT_MODULO_SEGURIDAD(?)';
        queryParams = ['preguntas'];
      } else if (PV_ACCION === 'respuestas') {
        query = 'CALL A_SELECT_MODULO_SEGURIDAD(?)';
        queryParams = ['respuestas'];
      } else if (PV_ACCION === 'parametros') {
        query = 'CALL A_SELECT_MODULO_SEGURIDAD(?)';
        queryParams = ['parametros'];
      } else if (PV_ACCION === 'bitacora') {
        query = 'CALL A_SELECT_MODULO_SEGURIDAD(?)';
        queryParams = ['bitacora'];
      } else if (PV_ACCION === 'usuario') {
        query = 'CALL A_SELECT_MODULO_SEGURIDAD(?)';
        queryParams = ['usuario'];
      } else if (PV_ACCION === 'contraseñas') {
        query = 'CALL A_SELECT_MODULO_SEGURIDAD(?)';
        queryParams = ['contraseñas'];
      } else {
        throw new Error('PV_ACCION inválido');
      }
  
      const result = await connection.query(query, queryParams);
      res.json(result[0]);
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };


// API PARA INSERTAR DATOS DEL MODULO DE SEGURIDAD  DEL PROCEDIMIENTO ALMACENADO A_INSERT_MODULO_SEGURIDAD
const addSeguridad = async (req, res) => {
  try {
    //parametros de la tablas del modulo se seguridad sonse se insertan los datos a actualizar
    const {
        PV_ACCION,PV_NOM_ROL, PV_DES_ROL,  PE_ESTADO,PV_PREGUNTA,PV_OBJETO, PV_DES_OBJETO, PV_TIP_OBJETO,
        PV_PARAMETRO,PV_VALOR,PB_COD_ROL,PB_COD_OBJETO,PE_PER_INSERCION,PE_PER_ELIMINACION, PE_PER_ACTUALIZACION, 
        PE_PER_CONSULTAR,PB_COD_PERSONA,PV_COD_USUARIO,PV_CONTRASEÑA,PE_ESTADO_USUARIO,PT_FEC_ULTIMA_CONECCION,
        PI_PREGUNTAS_CONTESTADAS,PT_PRIMER_INGRESO,PD_FEC_VENCIMIENTO,PB_COD_PREGUNTA,PV_RESPUESTA 
    } = req.body;
    const connection = await getConnection();
    await connection.query(
      'CALL A_INSERT_MODULO_SEGURIDAD(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [ // Parametro recibidos en el procedimiento
        PV_ACCION,PV_NOM_ROL, PV_DES_ROL,  PE_ESTADO,PV_PREGUNTA,PV_OBJETO, PV_DES_OBJETO, PV_TIP_OBJETO,
        PV_PARAMETRO,PV_VALOR,PB_COD_ROL,PB_COD_OBJETO,PE_PER_INSERCION,PE_PER_ELIMINACION, PE_PER_ACTUALIZACION, 
        PE_PER_CONSULTAR,PB_COD_PERSONA,PV_COD_USUARIO,PV_CONTRASEÑA,PE_ESTADO_USUARIO,PT_FEC_ULTIMA_CONECCION,
        PI_PREGUNTAS_CONTESTADAS,PT_PRIMER_INGRESO,PD_FEC_VENCIMIENTO,PB_COD_PREGUNTA,PV_RESPUESTA 
]);
    
    res.json("Dato insertados");
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

//API PARA ACTUALIZARDATOS DATOS DEL MODULO DE SEGURIDAD POR MEDIO DE UN PARAMETRO
  const updateSeguridad = async (req, res) => {
    try {
      //parametros de la tablas del modulo se seguridad sonse se actualizan los datos a actualizar
      const {
        
        
        PV_ACCION,PB_COD_ROL,PV_NOM_ROL, PV_DES_ROL,PE_ESTADO,  
        PB_COD_OBJETO ,PV_OBJETO, PV_DES_OBJETO, PV_TIP_OBJETO,
        PB_COD_PERMISO,PE_PER_INSERCION,PE_PER_ELIMINACION, PE_PER_ACTUALIZACION, PE_PER_CONSULTAR,
        PB_COD_PREGUNTA,PV_PREGUNTA,
        PB_COD_RESPUESTA_USUARIO ,PV_RESPUESTA,
        PB_COD_PARAMETRO,PV_PARAMETRO,PV_VALOR,
        PB_COD_PERSONA,PB_COD_USUARIO,PV_CONTRASEÑA,PE_ESTADO_USUARIO,PT_FEC_ULTIMA_CONECCION,
        PI_PREGUNTAS_CONTESTADAS,PT_PRIMER_INGRESO,PD_FEC_VENCIMIENTO
      } = req.body;
      const connection = await getConnection();
      await connection.query(
        'CALL A_UPDATE_MODULO_SEGURIDAD(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [ // Parametro recibidos en el procedimiento
        PV_ACCION,PB_COD_ROL,PV_NOM_ROL, PV_DES_ROL,PE_ESTADO,  
        PB_COD_OBJETO ,PV_OBJETO, PV_DES_OBJETO, PV_TIP_OBJETO,
        PB_COD_PERMISO,PE_PER_INSERCION,PE_PER_ELIMINACION, PE_PER_ACTUALIZACION, PE_PER_CONSULTAR,
        PB_COD_PREGUNTA,PV_PREGUNTA,
        PB_COD_RESPUESTA_USUARIO ,PV_RESPUESTA,
        PB_COD_PARAMETRO,PV_PARAMETRO,PV_VALOR,
        PB_COD_PERSONA,PB_COD_USUARIO,PV_CONTRASEÑA,PE_ESTADO_USUARIO,PT_FEC_ULTIMA_CONECCION,
        PI_PREGUNTAS_CONTESTADAS,PT_PRIMER_INGRESO,PD_FEC_VENCIMIENTO 
  ]);
      
      res.json("Dato Actualizados");
      } catch (error) {
        console.error("Error executing query:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
  };

  /*
  // API PARA INSERTAR DATOS DEL MODULO DE SEGURIDAD
const addSeguridad =async (req, res) => {
    try {
      const { NOM_ROL, DES_ROL, ESTADO } = req.body;

      if (NOM_ROL == undefined || DES_ROL == undefined || ESTADO == undefined){
        res.status(400).json({ message: " Bad request. no ha ingresado todos los datos." });
      }
      const roles = { NOM_ROL, DES_ROL, ESTADO };
      const connection = await getConnection();
      await connection.query('INSERT INTO TBL_MS_ROLES SET ?', roles);
    
      res.json("Dato insertados");
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  

    //API PARA ACTUALIZARDATOS DATOS DEL MODULO DE SEGURIDAD POR MEDIO DE UN PARAMETRO
const updateSeguridad = async (req, res) => {
    try {
      const { PV_ACCION } = req.params;
      const {  } = req.body;
      if (== undefined,  == undefined ||  == undefined ||  == undefined){
        res.status(400).json({ message: " Bad request. no ha ingresado todos los datos." });
      }
      const roles = {  };
      const connection = await getConnection();
      const result = await connection.query(' );
      res.json("Dato Actualizados");
    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }

  };*/

export const methods = {
    addSeguridad,
    getSeguridadSing,
    updateSeguridad
};