/**
 * Caso de uso para eliminar un usuario por su ID.
 */
export class DeleteUserById {
  /**
   * @param {Object} userRepository - Repositorio de usuarios.
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * Ejecuta la eliminación de un usuario.
   * @param {string} id - ID del usuario a eliminar.
   * @returns {Promise<Object|null>} Usuario eliminado o null si no existe.
   */
  async execute(id) {
    return await this.userRepository.deleteById(id);
  }
}