import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserById,
  deleteUserById,
  putUserById
} from "../controllers/UserController.js";

const router = Router();

/**
 * Rutas para la gestión de usuarios.
 * @module routes/userRoutes
 */

/**
 * @route POST /
 * @description Crea un nuevo usuario.
 * @access Público
 */
router.post("/", createUser);

/**
 * @route GET /
 * @description Obtiene la lista de todos los usuarios.
 * @access Público
 */
router.get("/", getUsers);

/**
 * @route GET /api/users/:id
 * @description Obtiene un usuario específico por su ID.
 * @param {string} id - ID del usuario.
 * @access Público
 */
router.get("/api/users/:id", getUserById);

/**
 * @route PUT /api/users/:id
 * @description Actualiza los datos de un usuario por su ID.
 * @param {string} id - ID del usuario.
 * @access Público
 */
router.put("/api/users/:id", putUserById);

/**
 * @route DELETE /api/users/:id
 * @description Elimina un usuario por su ID.
 * @param {string} id - ID del usuario.
 * @access Público
 */
router.delete("/api/users/:id", deleteUserById);

export default router;
