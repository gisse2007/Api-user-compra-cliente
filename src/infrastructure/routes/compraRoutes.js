import { Router } from "express";
import {
  createCompra,
  getCompras,
  getComprasById,
  putComprasById,
  deleteComprasById
} from "../controllers/compraController.js";

const router = Router();

router.post("/", createCompra);
router.get("/", getCompras);
router.get("/:id", getComprasById);
router.put("/:id", putComprasById);
router.delete("/:id", deleteComprasById);

export default router;
