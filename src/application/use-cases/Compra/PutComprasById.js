/**
 * Caso de uso: Actualizar una compra por su ID.
 */
class PutComprasById {
  /**
   * @param {Object} compraRepository - Repositorio de compras que maneja la persistencia.
   */
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }

  /**
   * Ejecuta la actualización de una compra en el repositorio.
   * @param {string} id - ID de la compra a actualizar.
   * @param {Object} data - Datos nuevos para actualizar la compra.
   * @returns {Promise<Object|null>} - Compra actualizada o `null` si no existe.
   */
  async execute(id, data) {
    return await this.compraRepository.updateById(id, data);
  }
}

export default PutComprasById;
