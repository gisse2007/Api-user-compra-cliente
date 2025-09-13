import mongoose from "mongoose";

/**
 * Esquema de Cliente en MongoDB.
 * Define la estructura del documento en la colección "clientes".
 */
const ClienteSchema = new mongoose.Schema({
  /** Documento o cédula del cliente */
  document: { type: Number, required: true },

  /** Nombre completo del cliente */
  name: { type: String, required: true },

  /** Correo electrónico del cliente */
  email: { type: String, required: true },

  /** Número de WhatsApp del cliente */
  WhatsApp: { type: String, required: true },
});

/** Modelo de Mongoose para la colección "Cliente" */
const ClienteModel = mongoose.model("Cliente", ClienteSchema);

/**
 * Repositorio MongoDB para manejar operaciones CRUD sobre clientes.
 */
class ClienteRepositoryMongo {
  /**
   * Crea un nuevo cliente en la base de datos.
   * @param {Object} clienteData - Datos del cliente a registrar.
   * @param {number} clienteData.document - Documento o cédula del cliente.
   * @param {string} clienteData.name - Nombre completo del cliente.
   * @param {string} clienteData.email - Correo electrónico del cliente.
   * @param {string} clienteData.WhatsApp - Número de WhatsApp del cliente.
   * @returns {Promise<Object>} Cliente creado.
   */
  async create(clienteData) {
    const cliente = new ClienteModel(clienteData);
    return await cliente.save();
  }

  /**
   * Obtiene todos los clientes registrados.
   * @returns {Promise<Object[]>} Lista de clientes.
   */
  async findAll() {
    return await ClienteModel.find();
  }

  /**
   * Busca un cliente por su ID.
   * @param {string} id - ID de MongoDB del cliente.
   * @returns {Promise<Object|null>} Cliente encontrado o null si no existe.
   */
  async findById(id) {
    return await ClienteModel.findById(id);
  }

  /**
   * Actualiza los datos de un cliente por su ID.
   * @param {string} id - ID de MongoDB del cliente.
   * @param {Object} data - Nuevos datos del cliente.
   * @returns {Promise<Object|null>} Cliente actualizado o null si no existe.
   */
  async updateById(id, data) {
    return await ClienteModel.findByIdAndUpdate(id, data, { new: true });
  }

  /**
   * Elimina un cliente por su ID.
   * @param {string} id - ID de MongoDB del cliente.
   * @returns {Promise<Object|null>} Cliente eliminado o null si no existe.
   */
  async deleteById(id) {
    return await ClienteModel.findByIdAndDelete(id);
  }
}

export default ClienteRepositoryMongo;
