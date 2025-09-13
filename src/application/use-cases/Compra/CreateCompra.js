/**
 * Caso de uso: Crear una nueva compra.
 */
class CreateCompra {
  /**
   * @param {Object} compraRepository - Repositorio de compras que maneja la persistencia.
   */
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }

  /**
   * Ejecuta la creación de una compra en el repositorio.
   * @param {Object} compraData - Datos de la compra a crear.
   * @returns {Promise<Object>} - Compra creada.
   */
  async execute(compraData) {
    return await this.compraRepository.create(compraData);
  }
}

export default CreateCompra;