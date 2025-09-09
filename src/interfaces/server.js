import express from "express";
import compraRoutes from "../infrastructure/routes/compraRoutes.js";

const app = express();

app.use(express.json())
app.use("/compras", compraRoutes);

export default app;