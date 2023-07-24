import { getConnection } from "../database/database";
import jwt from "jsonwebtoken";


//API PARA SELECCIONAR EL TOKEN DE USUARIO 
const getLogin = async (req, res) => {
  try {
    const { PV_COD_USUARIO, PV_CONTRASEÑA } = req.body;
    const connection = await getConnection();
    const result = await connection.query("SELECT COD_USUARIO, CONTRASEÑA FROM TBL_MS_USUARIOS WHERE COD_USUARIO = ? ", [PV_COD_USUARIO]); 
    
    if (result.length > 0 && result[0].CONTRASEÑA === PV_CONTRASEÑA) {
        // Credenciales válidas, generar un token JWT
        const token = jwt.sign({ PV_COD_USUARIO }, "SIMIL", { expiresIn: "1h" });
  
        // Devolver el token como respuesta
        res.json({ token });
      } else {
        // Credenciales inválidas, el inicio de sesión falló
        res.status(401).json({ error: "Credenciales inválidas" });
      }


  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const methods = {
    getLogin
};
