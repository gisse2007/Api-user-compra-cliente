import CreateCompra from "../../application/use-cases/CreateCompra.js";
import GetComprasById from "../../application/use-cases/GetComprasById.js";
import GetCompras from "../../application/use-cases/GetCompras.js";
import PutComprasById from "../../application/use-cases/PutComprasById.js";
import DeleteComprasById from "../../application/use-cases/DeleteComprasById.js";
import CompraRepositoryMongo from "../repositories/CompraRepositoryMongo.js";

const compraRepository = new CompraRepositoryMongo();

export const createCompra = async (req, res) => {
  try {
    const createCompraUC = new CreateCompra(compraRepository);
    const compra = await createCompraUC.execute(req.body);
    res.status(201).json(compra);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCompras = async (req, res) => {
  try {
    const getComprasUC = new GetCompras(compraRepository);
    const compras = await getComprasUC.execute();
    res.status(200).json(compras);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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
