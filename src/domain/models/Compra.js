class Compra{
      constructor({
    id = null,
    cliente,
    telefono,
    fecha,
    items,
    domicilio,
    direccion, // { calle, ciudad }
  }) {
    this.id = id;
    this.cliente = cliente;
    this.telefono = telefono;
    this.fecha = new Date(fecha);
    this.items = items;
    this.domicilio = domicilio;
    this.direccion = direccion ?? null;
  }
}

export default Compra; // Exporta la clase para usarla en otras capas del proyecto



