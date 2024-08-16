const carritoCompra = require("../tests/index");

describe("clase carritoCompra", () => {
  let carrito;
  beforeEach(() => {
    carrito = new carritoCompra();
  });
  const producto1 = { name: "Producto1", precio: 10 };
  const producto2 = { name: "Producto2", precio: 20 };

  it("carritoCompra debe ser una clase", () => {
    expect(typeof carritoCompra).toBe("function");
    expect(carrito instanceof carritoCompra).toBe(true);
  });

  //? 1.constructor(): Inicializa el carrito como un array vacío.
  it("La clase carritoCompra inicializa la propiedad 'productos' como un array vacío", () => {
    expect(Array.isArray(carrito.productos)).toBe(true);
    expect(carrito.productos).toHaveLength(0);
    // expect(carrito.productos.length).toBe(0); otra forma de definir lo mismo que el matcher 'toHaveLength'
    // expect(carrito.productos).toEqual([]);
  });

  //? 2.agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
  it("El metodo agregarProducto recibe un objeto representando un producto y lo agrega al carrito", () => {
    //llamamos nuevamente a 'carrito.agregarProducto' que su length es cero por el beforeEach y le agregamos el producto1, por parametro
    carrito.agregarProducto(producto1);
    expect(carrito.productos).toHaveLength(1);
    expect(carrito.productos[0]).toEqual(producto1);

    carrito.agregarProducto(producto2);
    expect(carrito.productos).toHaveLength(2);
    expect(carrito.productos[1]).toEqual(producto2);
  });

  //? 3.calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el 
  it("El metodo calcularTotal calcula el total de la compra sumando los precios de todos los productos del carrito", () => {
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    expect(carrito.calcularTotal()).toEqual(30);
  });

  //? 4.aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
  it("El metodo aplicarDescuento aplica un descuento al total de la compra según el porcentaje especificado", () => {
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    expect(carrito.aplicarDescuento(50)).toBe(15);
    expect(carrito.aplicarDescuento(10)).toBe(27);
  });
});
