
/**
 * Caso de uso para obtener un usuario por su ID.
 */
export class GetUserById {
  /**
   * @param {Object} userRepository - Repositorio de usuarios.
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * Ejecuta la búsqueda de un usuario por su ID.
   * @param {string} id - ID del usuario.
   * @returns {Promise<Object|null>} Usuario encontrado o null si no existe.
   */
  async execute(id) {
    return await this.userRepository.findById(id);
  }
}
