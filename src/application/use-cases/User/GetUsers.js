/**
 * Caso de uso para obtener todos los usuarios.
 */
export class GetUsers {
  /**
   * @param {Object} userRepository - Repositorio de usuarios.
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * Ejecuta la búsqueda de todos los usuarios.
   * @returns {Promise<Object[]>} Lista de usuarios.
   */
  async execute() {
    return await this.userRepository.findAll();
  }
}