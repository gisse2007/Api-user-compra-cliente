/**
 * Caso de uso: Eliminar un cliente por su ID.
 */
class DeleteClienteById {
  /**
   * Inicializa el caso de uso con un repositorio de clientes.
   * @param {Object} clienteRepository - Repositorio encargado de manejar los clientes.
   * Debe implementar un método `deleteById(id)`.
   */
  constructor(clienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  /**
   * Ejecuta la eliminación de un cliente por su ID.
   * @param {string} id - Identificador único del cliente.
   * @returns {Promise<Object|null>} Cliente eliminado o `null` si no existe.
   */
  async execute(id) {
    return await this.clienteRepository.deleteById(id);
  }
}

export default DeleteClienteById;
