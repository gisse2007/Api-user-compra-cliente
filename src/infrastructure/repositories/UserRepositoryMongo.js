import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  rol: String,
  status: Boolean,
});

const UserModel = mongoose.model("User", UserSchema);

/**
 * Repositorio para manejar operaciones de persistencia de usuarios en MongoDB.
 */
class UserRepositoryMongo {
  /**
   * Crea un nuevo usuario en la base de datos.
   * @async
   * @param {Object} userData - Datos del usuario.
   * @param {string} userData.name - Nombre del usuario.
   * @param {string} userData.email - Correo electrónico.
   * @param {string} userData.password - Contraseña encriptada.
   * @param {string} userData.rol - Rol asignado al usuario.
   * @param {boolean} userData.status - Estado activo/inactivo del usuario.
   * @returns {Promise<Object>} El usuario creado.
   */
  async create(userData) {
    const user = new UserModel(userData);
    const savedUser = await user.save();
    return savedUser;
  }

  /**
   * Obtiene todos los usuarios de la base de datos.
   * @async
   * @returns {Promise<Object[]>} Lista de usuarios.
   */
  async findAll() {
    const users = await UserModel.find();
    return users;
  }

  /**
   * Busca un usuario por su ID.
   * @async
   * @param {string} id - ID del usuario.
   * @returns {Promise<Object|null>} El usuario encontrado o `null` si no existe.
   */
  async findById(id) {
    const user = await UserModel.findById(id);
    return user;
  }

  /**
   * Actualiza un usuario por su ID.
   * Si se incluye `password`, esta será encriptada antes de guardarse.
   * @async
   * @param {string} id - ID del usuario a actualizar.
   * @param {Object} updateData - Datos a actualizar.
   * @param {string} [updateData.name] - Nombre del usuario.
   * @param {string} [updateData.email] - Correo electrónico.
   * @param {string} [updateData.password] - Contraseña en texto plano (se encripta automáticamente).
   * @param {string} [updateData.rol] - Rol del usuario.
   * @param {boolean} [updateData.status] - Estado del usuario.
   * @returns {Promise<Object|null>} El usuario actualizado o `null` si no existe.
   */
  async updateById(id, updateData) {
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    const updatedUser = await UserModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    return updatedUser;
  }

  /**
   * Elimina un usuario por su ID.
   * @async
   * @param {string} id - ID del usuario a eliminar.
   * @returns {Promise<Object|null>} El usuario eliminado o `null` si no existe.
   */
  async deleteById(id) {
    return await UserModel.findByIdAndDelete(id);
  }
}

export default UserRepositoryMongo;
