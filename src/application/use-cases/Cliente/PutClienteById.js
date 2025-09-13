/**
 * Caso de uso: Actualizar un cliente por su ID.
 */
class PutClienteById {
  /**
   * Inicializa el caso de uso con un repositorio de clientes.
   * @param {Object} clienteRepository - Repositorio encargado de manejar los clientes.
   * Debe implementar un método `updateById(id, data)`.
   */
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  /**
   * Ejecuta la actualización de un cliente por su ID.
   * @param {string} id - Identificador único del cliente.
   * @param {Object} data - Datos a actualizar del cliente.
   * @param {string} [data.document] - Documento de identidad del cliente.
   * @param {string} [data.name] - Nombre completo del cliente.
   * @param {string} [data.email] - Correo electrónico del cliente.
   * @param {string} [data.WhatsApp] - Número de WhatsApp del cliente.
   * @returns {Promise<Object|null>} Cliente actualizado o `null` si no existe.
   */
  async execute(id, data) {
    return await this.clienteRepository.updateById(id, data);
  }
}

export default PutClienteById;

