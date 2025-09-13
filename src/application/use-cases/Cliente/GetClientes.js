/**
 * Caso de uso: Obtener todos los clientes.
 */
class GetClientes {
  /**
   * Inicializa el caso de uso con un repositorio de clientes.
   * @param {Object} clienteRepository - Repositorio encargado de manejar los clientes.
   * Debe implementar un método `findAll()`.
   */
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  /**
   * Ejecuta la obtención de todos los clientes registrados.
   * @returns {Promise<Array<Object>>} Lista de clientes.
   */
  async execute() {
    return await this.clienteRepository.findAll();
  }
}

export default GetClientes;
