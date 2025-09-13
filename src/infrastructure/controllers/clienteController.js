import CreateCliente from "../../application/use-cases/Cliente/CreateCliente.js";
import GetClienteById from "../../application/use-cases/Cliente/GetClienteById.js";
import GetClientes from "../../application/use-cases/Cliente/GetClientes.js";
import ClienteRepositoryMongo from "../repositories/ClienteRepositoryMongo.js";
import PutClienteById from "../../application/use-cases/Cliente/PutClienteById.js";
import DeleteClienteById from "../../application/use-cases/Cliente/DeleteClienteById.js";

const clienteRepository = new ClienteRepositoryMongo();

/**
 * Crea un nuevo cliente.
 * @route POST /clientes
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} req.body - Datos del cliente.
 * @param {string} req.body.document - Documento de identidad.
 * @param {string} req.body.name - Nombre del cliente.
 * @param {string} req.body.email - Correo electrónico.
 * @param {string} req.body.WhatsApp - Número de WhatsApp.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Respuesta con el cliente creado o error.
 */
export const createCliente = async (req, res) => {
  try {
    const createCliente = new CreateCliente(clienteRepository);
    const cliente = await createCliente.execute(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Obtiene todos los clientes.
 * @route GET /clientes
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Respuesta con lista de clientes o error.
 */
export const getClientes = async (req, res) => {
  try {
    const getClientes = new GetClientes(clienteRepository);
    const clientes = await getClientes.execute();
    res.status(200).json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Obtiene un cliente por su ID.
 * @route GET /clientes/:id
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {string} req.params.id - ID del cliente.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Respuesta con el cliente encontrado o error.
 */
export const getClienteById = async (req, res) => {
  try {
    const getClienteById = new GetClienteById(clienteRepository);
    const cliente = await getClienteById.execute(req.params.id);
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Actualiza un cliente por su ID.
 * @route PUT /clientes/:id
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {string} req.params.id - ID del cliente.
 * @param {Object} req.body - Datos a actualizar del cliente.
 * @param {string} [req.body.document] - Documento de identidad.
 * @param {string} [req.body.name] - Nombre del cliente.
 * @param {string} [req.body.email] - Correo electrónico.
 * @param {string} [req.body.WhatsApp] - Número de WhatsApp.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Respuesta con el cliente actualizado o error.
 */
export const putClienteById = async (req, res) => {
  try {
    const putClienteById = new PutClienteById(clienteRepository);
    const cliente = await putClienteById.execute(req.params.id, req.body);
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Elimina un cliente por su ID.
 * @route DELETE /clientes/:id
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {string} req.params.id - ID del cliente.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} Respuesta con el cliente eliminado o error.
 */
export const deleteClienteById = async (req, res) => {
  try {
    const deleteClienteById = new DeleteClienteById(clienteRepository);
    const cliente = await deleteClienteById.execute(req.params.id);
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
