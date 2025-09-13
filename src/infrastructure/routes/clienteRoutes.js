import { Router } from "express";
import { 
  createCliente, 
  deleteClienteById, 
  getClienteById, 
  getClientes, 
  putClienteById 
} from "../controllers/clienteController.js";

const router = Router();

/**
 * @route POST /
 * @description Crea un nuevo cliente en la base de datos.
 * @access Público (o restringido según middleware de autenticación).
 */
router.post("/", createCliente);

/**
 * @route GET /
 * @description Obtiene todos los clientes registrados.
 * @access Público
 */
router.get("/", getClientes);

/**
 * @route GET /cliente/:id
 * @description Obtiene un cliente específico por su ID.
 * @param {string} id - ID del cliente en MongoDB.
 * @access Público
 */
router.get("/cliente/:id", getClienteById);

/**
 * @route PUT /cliente/:id
 * @description Actualiza los datos de un cliente existente.
 * @param {string} id - ID del cliente en MongoDB.
 * @access Público
 */
router.put("/cliente/:id", putClienteById);

/**
 * @route DELETE /cliente/:id
 * @description Elimina un cliente de la base de datos por su ID.
 * @param {string} id - ID del cliente en MongoDB.
 * @access Público
 */
router.delete("/cliente/:id", deleteClienteById);

export default router;
