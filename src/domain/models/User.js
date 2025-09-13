/**
 * Representa un usuario dentro del sistema.
 */
class User {
  /**
   * Crea una instancia de un usuario.
   * @param {Object} params - Parámetros del usuario.
   * @param {string} params.id - Identificador único del usuario.
   * @param {string} params.name - Nombre del usuario.
   * @param {string} params.email - Correo electrónico del usuario.
   * @param {string} params.password - Contraseña del usuario (encriptada).
   * @param {string} params.rol - Rol asignado al usuario (ej. "admin", "cliente").
   * @param {string} params.status - Estado del usuario (ej. "activo", "inactivo").
   */
  constructor({ id, name, email, password, rol, status }) {
    this.id = id; 
    this.name = name; 
    this.email = email; 
    this.password = password;
    this.rol = rol;
    this.status = status;
  }
}

export default User;
