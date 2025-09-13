import express from "express";
import compraRoutes from "../infrastructure/routes/compraRoutes.js";
import userRoutes from "../infrastructure/routes/userRoutes.js";
import clienteRoutes from "../infrastructure/routes/clienteRoutes.js";

const app = express();

// Middleware para parsear JSON en las solicitudes
app.use(express.json());

/**
 * @route /compras
 * @description Rutas relacionadas con las compras (crear, listar, actualizar, eliminar).
 */
app.use("/compras", compraRoutes);

/**
 * @route /api/users
 * @description Rutas relacionadas con los usuarios (crear, listar, actualizar, eliminar).
 */
app.use("/api/users", userRoutes);

/**
 * @route /cliente
 * @description Rutas relacionadas con los clientes (crear, listar, actualizar, eliminar).
 */
app.use("/cliente", clienteRoutes);

export default app;
