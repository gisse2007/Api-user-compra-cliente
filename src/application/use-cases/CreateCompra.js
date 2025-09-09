class CreateCompra {
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }

  async execute(compraData) {
    // Podrías calcular el total desde los items
    const total = compraData.items.reduce(
      (sum, item) => sum + item.cantidad * item.precio,
      0
    );
    compraData.total = total;

    return await this.compraRepository.create(compraData);
  }
}

export default CreateCompra;
