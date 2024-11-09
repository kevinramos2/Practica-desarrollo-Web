class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}
class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }
}

//Para probar 
const producto1 = new Producto("Laptop", 1500);
const producto2 = new Producto("Teclado", 50);
const producto3 = new Producto("Mouse", 70);
const producto4 = new Producto("Monitor", 5000);

// Crear carrito y agregar productos
const carrito = new Carrito();
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.agregarProducto(producto4);

