class PutComprasById {
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }

  async execute(id, data) {
    // recalcular total si vienen items nuevos
    if (data.items) {
      data.total = data.items.reduce(
        (sum, item) => sum + item.cantidad * item.precio,
        0
      );
    }

    return await this.compraRepository.updateById(id, data);
  }
}

export default PutComprasById;
