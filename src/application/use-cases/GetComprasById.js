class GetCompraById {
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }
  async execute(id) {
    return await this.compraRepository.findById(id);
  }
}

export default GetCompraById;
