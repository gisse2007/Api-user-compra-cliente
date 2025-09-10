class PutComprasById {
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }

  async execute(id, data) {
    return await this.compraRepository.updateById(id, data);
  }
}

export default PutComprasById;
