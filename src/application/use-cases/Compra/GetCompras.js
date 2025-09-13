
/**
 * Caso de uso: Obtener todas las compras.
 */
class GetCompras {
  /**
   * @param {Object} compraRepository - Repositorio de compras que maneja la persistencia.
   */
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }

  /**
   * Ejecuta la consulta de todas las compras en el repositorio.
   * @returns {Promise<Array>} - Lista de compras.
   */
  async execute() {
    return await this.compraRepository.findAll();
  }
}

export default GetCompras;
