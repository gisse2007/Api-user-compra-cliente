import CreateUser from "../../application/use-cases/User/CreateUser.js";
import {GetUserById} from "../../application/use-cases/User/GetUserById.js";
import {GetUsers} from "../../application/use-cases/User/GetUsers.js";
import UserRepositoryMongo from "../repositories/UserRepositoryMongo.js";
import {PutUserById} from "../../application/use-cases/User/PutUserById.js";
import {DeleteUserById} from "../../application/use-cases/User/DeleteUserById.js";

const userRepository = new UserRepositoryMongo();

/**
 * Crea un nuevo usuario en la base de datos.
 * @async
 * @function createUser
 * @param {import("express").Request} req - Objeto de solicitud HTTP con los datos del usuario en el body.
 * @param {import("express").Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>} Respuesta con el usuario creado o error.
 */
export const createUser = async (req, res) => {
  try {
    const createUser = new CreateUser(userRepository);
    const user = await createUser.execute(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Obtiene todos los usuarios registrados.
 * @async
 * @function getUsers
 * @param {import("express").Request} req - Objeto de solicitud HTTP.
 * @param {import("express").Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>} Respuesta con la lista de usuarios o error.
 */
export const getUsers = async (req, res) => {
  try {
    const getUsers = new GetUsers(userRepository);
    const users = await getUsers.execute();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Obtiene un usuario por su ID.
 * @async
 * @function getUserById
 * @param {import("express").Request} req - Objeto de solicitud HTTP con el ID del usuario en params.
 * @param {import("express").Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>} Respuesta con el usuario encontrado o error.
 */
export const getUserById = async (req, res) => {
  try {
    const getUserById = new GetUserById(userRepository);
    const user = await getUserById.execute(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Actualiza un usuario por su ID.
 * @async
 * @function putUserById
 * @param {import("express").Request} req - Objeto de solicitud HTTP con el ID del usuario en params y los datos en body.
 * @param {import("express").Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>} Respuesta con el usuario actualizado o error.
 */
export const putUserById = async (req, res) => {
  try {
    const putUserById = new PutUserById(userRepository);
    const user = await putUserById.execute(req.params.id, req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Elimina un usuario por su ID.
 * @async
 * @function deleteUserById
 * @param {import("express").Request} req - Objeto de solicitud HTTP con el ID del usuario en params.
 * @param {import("express").Response} res - Objeto de respuesta HTTP.
 * @returns {Promise<void>} Respuesta con el usuario eliminado o error.
 */
export const deleteUserById = async (req, res) => {
  try {
    const deleteUserById = new DeleteUserById(userRepository);
    const user = await deleteUserById.execute(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
