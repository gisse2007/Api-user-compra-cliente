/**
 * Representa un Cliente dentro del sistema.
 */
class Cliente {
  /**
   * Crea una nueva instancia de Cliente.
   * @param {Object} params - Parámetros del cliente.
   * @param {string} params.id - Identificador único del cliente.
   * @param {string} params.document - Documento de identidad del cliente.
   * @param {string} params.name - Nombre completo del cliente.
   * @param {string} params.email - Correo electrónico del cliente.
   * @param {string} params.WhatsApp - Número de WhatsApp del cliente.
   */
  constructor({ id, document, name, email, WhatsApp }) {
    /** @type {string} */
    this.id = id;

    /** @type {string} */
    this.document = document;

    /** @type {string} */
    this.name = name;

    /** @type {string} */
    this.email = email;

    /** @type {string} */
    this.WhatsApp = WhatsApp;
  }
}

export default Cliente;
