import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    producto: { type: String, required: true },
    cantidad: { type: Number, required: true, min: 1 },
    precio: { type: Number, required: true, min: 0 }
  },
  { _id: false }
);

const DireccionSchema = new mongoose.Schema(
  {
    calle: { type: String, required: true },
    ciudad: { type: String, required: true }
  },
  { _id: false }
);

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

class CompraRepositoryMongo {
  async create(compraData) {
    const compra = new CompraModel(compraData);
    return await compra.save();
  }

  async findAll() {
    return await CompraModel.find();
  }

  async findById(id) {
    return await CompraModel.findById(id);
  }

  async updateById(id, data) {
    return await CompraModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id) {
    return await CompraModel.findByIdAndDelete(id);
  }
}

export default CompraRepositoryMongo;
