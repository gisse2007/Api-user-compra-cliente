import bcrypt from "bcrypt";

/**
 * Caso de uso para crear un nuevo usuario con contraseña encriptada.
 */
 class CreateUser {
  /**
   * @param {Object} userRepository - Repositorio de usuarios.
   */
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  /**
   * Ejecuta la creación de un usuario.
   * @param {Object} userData - Datos del usuario.
   * @param {string} userData.password - Contraseña en texto plano.
   * @returns {Promise<Object>} Usuario creado.
   */
  async execute(userData) {
    const { password, ...rest } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.userRepository.create({
      ...rest,
      password: hashedPassword,
    });
  }
}

export default CreateUser