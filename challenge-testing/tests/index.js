//?Desarrolla una clase en JavaScript llamada CarritoCompra,debe tener los siguientes métodos:

class carritoCompra {
  //? 1.constructor(): Inicializa el carrito como un array vacío.
  constructor() {
    this.productos = [];
  }
  //? 2.agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
  agregarProducto(producto) {
    this.productos.push(producto);
  }
  //? 3.calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
  calcularTotal() {
    let totalCompra = 0;
    for (const producto of this.productos) {
      totalCompra += producto.precio;
    }
    return totalCompra;
  }
  //? 4.aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
  aplicarDescuento(porcentaje) {
    const totalCompra = this.calcularTotal();
    const descuento = totalCompra * (porcentaje / 100);
    return totalCompra - descuento;
  }
}

module.exports = carritoCompra;
