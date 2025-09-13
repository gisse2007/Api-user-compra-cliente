import { Router } from "express";
import {
  createCompra,
  getCompras,
  getComprasById,
  putComprasById,
  deleteComprasById
} from "../controllers/compraController.js";

const router = Router();

/**
 * @route POST /api/compras
 * @description Crea una nueva compra.
 * @access Público (o restringido según middleware de autenticación)
 */
router.post("/", createCompra);

/**
 * @route GET /api/compras
 * @description Obtiene todas las compras registradas.
 * @access Público
 */
router.get("/", getCompras);

/**
 * @route GET /api/compras/:id
 * @description Obtiene una compra por su ID.
 * @param {string} id - ID de la compra en MongoDB.
 * @access Público
 */
router.get("/:id", getComprasById);

/**
 * @route PUT /api/compras/:id
 * @description Actualiza una compra existente por su ID.
 * @param {string} id - ID de la compra en MongoDB.
 * @access Público
 */
router.put("/:id", putComprasById);

/**
 * @route DELETE /api/compras/:id
 * @description Elimina una compra por su ID.
 * @param {string} id - ID de la compra en MongoDB.
 * @access Público
 */
router.delete("/:id", deleteComprasById);

export default router;
