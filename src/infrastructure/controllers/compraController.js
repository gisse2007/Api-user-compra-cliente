import CreateCompra from "../../application/use-cases/Compra/CreateCompra.js";
import GetComprasById from "../../application/use-cases/Compra/GetComprasById.js";
import GetCompras from "../../application/use-cases/Compra/GetCompras.js";
import PutComprasById from "../../application/use-cases/Compra/PutComprasById.js";
import DeleteComprasById from "../../application/use-cases/Compra/DeleteComprasById.js";
import CompraRepositoryMongo from "../repositories/CompraRepositoryMongo.js";

const compraRepository = new CompraRepositoryMongo();

/**
 * Crea una nueva compra.
 * @route POST /compras
 * @param {import("express").Request} req - Objeto de solicitud con los datos de la compra en `req.body`.
 * @param {import("express").Response} res - Objeto de respuesta.
 */
export const createCompra = async (req, res) => {
  try {
    const createCompraUC = new CreateCompra(compraRepository);
    const compra = await createCompraUC.execute(req.body);
    res.status(201).json(compra);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Obtiene todas las compras registradas.
 * @route GET /compras
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const getCompras = async (req, res) => {
  try {
    const getComprasUC = new GetCompras(compraRepository);
    const compras = await getComprasUC.execute();
    res.status(200).json(compras);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Obtiene una compra por su ID.
 * @route GET /compras/:id
 * @param {import("express").Request} req - Debe contener el parámetro `id` en la URL.
 * @param {import("express").Response} res
 */
export const getComprasById = async (req, res) => {
  try {
    const getComprasByIdUC = new GetComprasById(compraRepository);
    const compra = await getComprasByIdUC.execute(req.params.id);
    if (!compra) return res.status(404).json({ error: "Compra no encontrada" });
    res.status(200).json(compra);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Actualiza una compra existente por su ID.
 * @route PUT /compras/:id
 * @param {import("express").Request} req - Debe contener el `id` en la URL y los nuevos datos en `req.body`.
 * @param {import("express").Response} res
 */
export const putComprasById = async (req, res) => {
  try {
    const putComprasByIdUC = new PutComprasById(compraRepository);
    const compra = await putComprasByIdUC.execute(req.params.id, req.body);
    if (!compra) return res.status(404).json({ error: "Compra no encontrada" });
    res.status(200).json(compra);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * Elimina una compra por su ID.
 * @route DELETE /compras/:id
 * @param {import("express").Request} req - Debe contener el parámetro `id` en la URL.
 * @param {import("express").Response} res
 */
export const deleteComprasById = async (req, res) => {
  try {
    const deleteComprasByIdUC = new DeleteComprasById(compraRepository);
    const result = await deleteComprasByIdUC.execute(req.params.id);
    if (!result) return res.status(404).json({ error: "Compra no encontrada" });
    res.status(200).json({ message: "Compra eliminada correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
