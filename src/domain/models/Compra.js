/**
 * Modelo de dominio que representa una Compra.
 */
class Compra {
  /**
   * Crea una nueva instancia de Compra.
   * @param {Object} params - Parámetros para inicializar la compra.
   * @param {string|null} [params.id=null] - Identificador único de la compra (puede ser asignado por la BD).
   * @param {string} params.cliente - Nombre o identificador del cliente que realiza la compra.
   * @param {string} params.telefono - Teléfono de contacto del cliente.
   * @param {Date|string} params.fecha - Fecha de la compra.
   * @param {Array<Object>} params.items - Lista de productos o servicios adquiridos.
   * @param {boolean} params.domicilio - Indica si la compra incluye domicilio/envío.
   * @param {Object|null} [params.direccion=null] - Dirección de envío. 
   * @param {string} params.direccion.calle - Calle de la dirección.
   * @param {string} params.direccion.ciudad - Ciudad de la dirección.
   * @param {number} params.total - Valor total de la compra.
   */
  constructor({
    id = null,
    cliente,
    telefono,
    fecha,
    items,
    domicilio,
    direccion, // { calle, ciudad }
    total,
  }) {
    /** @type {string|null} */
    this.id = id;

    /** @type {string} */
    this.cliente = cliente;

    /** @type {string} */
    this.telefono = telefono;

    /** @type {Date} */
    this.fecha = new Date(fecha);

    /** @type {Array<Object>} */
    this.items = items;

    /** @type {boolean} */
    this.domicilio = domicilio;

    /** @type {Object|null} */
    this.direccion = direccion ?? null;

    /** @type {number} */
    this.total = total;
  }
}

export default Compra; // Exporta la clase para usarla en otras capas del proyecto
