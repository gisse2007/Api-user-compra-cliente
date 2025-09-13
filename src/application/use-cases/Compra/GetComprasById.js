/**
 * Caso de uso: Obtener una compra por su ID.
 */
class GetCompraById {
  /**
   * @param {Object} compraRepository - Repositorio de compras que maneja la persistencia.
   */
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }

  /**
   * Ejecuta la búsqueda de una compra en el repositorio por su ID.
   * @param {string} id - ID de la compra.
   * @returns {Promise<Object|null>} - Compra encontrada o `null` si no existe.
   */
  async execute(id) {
    return await this.compraRepository.findById(id);
  }
}

export default GetCompraById;
