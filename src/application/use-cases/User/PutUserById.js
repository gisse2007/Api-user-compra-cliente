/**
 * Caso de uso para actualizar un usuario por su ID.
 */
export default class PutUserById {
  /**
   * @param {Object} userRepository - Repositorio de usuarios.
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * Ejecuta la actualización de un usuario.
   * @param {string} id - ID del usuario a actualizar.
   * @param {Object} data - Datos a actualizar.
   * @returns {Promise<Object|null>} Usuario actualizado o null si no existe.
   */
  async execute(id, data) {
    return await this.userRepository.updateById(id, data);
  }
}
