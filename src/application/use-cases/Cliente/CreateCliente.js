/**
 * Caso de uso: Crear un nuevo cliente.
 */
class CreateCliente {
  /**
   * Inicializa el caso de uso con un repositorio de clientes.
   * @param {Object} clienteRepository - Repositorio encargado de manejar los clientes.
   * Debe implementar un método `create(clienteData)`.
   */
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  /**
   * Ejecuta la creación de un nuevo cliente.
   * @param {Object} clienteData - Datos del cliente a crear.
   * @param {string} clienteData.document - Documento de identidad del cliente.
   * @param {string} clienteData.name - Nombre completo del cliente.
   * @param {string} clienteData.email - Correo electrónico del cliente.
   * @param {string} clienteData.WhatsApp - Número de WhatsApp del cliente.
   * @returns {Promise<Object>} Cliente creado.
   */
  async execute(clienteData) {
    return await this.clienteRepository.create(clienteData);
  }
}

export default CreateCliente;


