/**
 * Caso de uso: Obtener un cliente por su ID.
 */
class GetClienteById {
  /**
   * Inicializa el caso de uso con un repositorio de clientes.
   * @param {Object} clienteRepository - Repositorio encargado de manejar los clientes.
   * Debe implementar un método `findById(id)`.
   */
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  /**
   * Ejecuta la búsqueda de un cliente por su ID.
   * @param {string} id - Identificador único del cliente.
   * @returns {Promise<Object|null>} Cliente encontrado o `null` si no existe.
   */
  async execute(id) {
    return await this.clienteRepository.findById(id);
  }
}

export default GetClienteById;
