import "dotenv/config.js";
import connectDB from "./config/database.js";
import app from "./interfaces/server.js";

const PORT = process.env.PORT || 3000;

/**
 * Punto de entrada de la aplicación.
 * 
 * - Carga las variables de entorno usando `dotenv`.
 * - Establece la conexión con la base de datos MongoDB.
 * - Inicia el servidor Express en el puerto definido en `.env` o por defecto en `3000`.
 */
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto: ${PORT}`);
  });
});
