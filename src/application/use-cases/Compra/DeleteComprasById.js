
/**
 * Caso de uso: Eliminar una compra por su ID.
 */
class DeleteComprasById {
  /**
   * @param {Object} compraRepository - Repositorio de compras que maneja la persistencia.
   */
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }

  /**
   * Ejecuta la eliminación de una compra en el repositorio.
   * @param {string} id - ID de la compra a eliminar.
   * @returns {Promise<Object|null>} - Compra eliminada o `null` si no existe.
   */
  async execute(id) {
    return await this.compraRepository.deleteById(id);
  }
}

export default DeleteComprasById;
