import mongoose from "mongoose";

/**
 * Esquema de un item dentro de una compra.
 * @typedef {Object} Item
 * @property {string} producto - Nombre del producto.
 * @property {number} cantidad - Cantidad comprada (mínimo 1).
 * @property {number} precio - Precio unitario del producto (mínimo 0).
 */
const ItemSchema = new mongoose.Schema(
  {
    producto: { type: String, required: true },
    cantidad: { type: Number, required: true, min: 1 },
    precio: { type: Number, required: true, min: 0 }
  },
  { _id: false }
);

/**
 * Esquema de dirección para envíos a domicilio.
 * @typedef {Object} Direccion
 * @property {string} calle - Calle de la dirección.
 * @property {string} ciudad - Ciudad de la dirección.
 */
const DireccionSchema = new mongoose.Schema(
  {
    calle: { type: String, required: true },
    ciudad: { type: String, required: true }
  },
  { _id: false }
);

/**
 * Esquema de una compra registrada en MongoDB.
 * @typedef {Object} Compra
 * @property {string} cliente - Nombre del cliente.
 * @property {string} telefono - Teléfono de contacto.
 * @property {Date} fecha - Fecha de la compra.
 * @property {Item[]} items - Lista de productos adquiridos.
 * @property {boolean} domicilio - Si la compra requiere envío a domicilio.
 * @property {Direccion|null} direccion - Dirección de envío (requerida solo si domicilio es `true`).
 * @property {number} total - Valor total de la compra.
 */
const CompraSchema = new mongoose.Schema(
  {
    cliente: { type: String, required: true, trim: true },
    telefono: { type: String, required: true },
    fecha: { type: Date, required: true },
    items: { type: [ItemSchema], required: true },
    domicilio: { type: Boolean, required: true },
    direccion: {
      type: DireccionSchema,
      required: function () {
        return this.domicilio === true;
      }
    },
    total: { type: Number, required: true, min: 0 }
  },
  { timestamps: true }
);

const CompraModel = mongoose.model("Compra", CompraSchema);

/**
 * Repositorio para manejar operaciones CRUD de Compras en MongoDB.
 */
class CompraRepositoryMongo {
  /**
   * Crea una nueva compra en la base de datos.
   * @param {Compra} compraData - Datos de la compra.
   * @returns {Promise<Compra>} - Compra creada.
   */
  async create(compraData) {
    const compra = new CompraModel(compraData);
    return await compra.save();
  }

  /**
   * Obtiene todas las compras registradas.
   * @returns {Promise<Compra[]>} - Lista de compras.
   */
  async findAll() {
    return await CompraModel.find();
  }

  /**
   * Busca una compra por su ID.
   * @param {string} id - ID de la compra.
   * @returns {Promise<Compra|null>} - Compra encontrada o `null` si no existe.
   */
  async findById(id) {
    return await CompraModel.findById(id);
  }

  /**
   * Actualiza una compra por su ID.
   * @param {string} id - ID de la compra a actualizar.
   * @param {Partial<Compra>} data - Datos a actualizar.
   * @returns {Promise<Compra|null>} - Compra actualizada o `null` si no existe.
   */
  async updateById(id, data) {
    return await CompraModel.findByIdAndUpdate(id, data, { new: true });
  }

  /**
   * Elimina una compra por su ID.
   * @param {string} id - ID de la compra a eliminar.
   * @returns {Promise<Compra|null>} - Compra eliminada o `null` si no existe.
   */
  async deleteById(id) {
    return await CompraModel.findByIdAndDelete(id);
  }
}

export default CompraRepositoryMongo;
