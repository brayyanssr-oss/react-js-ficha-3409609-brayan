console.log("JavaScript listo para practicar");


// ======================================================
// RETO 1: funciones, parámetros y return
// ======================================================

function calcularTotal(precio, cantidad) {
  const total = precio * cantidad;
  return total;
}
console.log(calcularTotal(50000, 3)); // 150000

function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}
function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

console.log("Suma:", sumar(8, 2));
console.log("Resta:", restar(8, 2));
console.log("Multiplicación:", multiplicar(8, 2));
console.log("División:", dividir(8, 2));
console.log("Promedio:", calcularPromedio(3.5, 4.0, 4.5));

// Pregunta de control (reescríbela con tus palabras):
// console.log() solo MUESTRA un valor en la consola para que yo lo vea,
// pero ese valor no queda disponible para usarlo después.
// return DEVUELVE el valor desde la función a quien la llamó, y así
// puedo guardarlo en una variable o usarlo en otros cálculos.


// ======================================================
// RETO 2: funciones flecha
// ======================================================

const aplicarIva = precio => precio * 1.19;
console.log("Precio con IVA:", aplicarIva(100000));

const cuadrado = numero => numero * numero;
const esMayorEdad = edad => edad >= 18;
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

console.log("Cuadrado de 5:", cuadrado(5));
console.log("¿Es mayor de edad (20)?", esMayorEdad(20));
console.log("¿Es mayor de edad (15)?", esMayorEdad(15));
console.log("Nombre completo:", nombreCompleto("Brayan", "Pérez"));

// ======================================================
// RETO 3: arreglos y objetos (10 productos)
// ======================================================
const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audifonos', precio: 120000, categoria: 'Audio', stock: 8 },
  { id: 5, nombre: 'Webcam', precio: 150000, categoria: 'Perifericos', stock: 0 },
  { id: 6, nombre: 'Portatil', precio: 2800000, categoria: 'Computadores', stock: 2 },
  { id: 7, nombre: 'Parlantes', precio: 180000, categoria: 'Audio', stock: 6 },
  { id: 8, nombre: 'Disco SSD 1TB', precio: 320000, categoria: 'Almacenamiento', stock: 10 },
  { id: 9, nombre: 'Memoria USB 64GB', precio: 35000, categoria: 'Almacenamiento', stock: 25 },
  { id: 10, nombre: 'Monitor Curvo', precio: 980000, categoria: 'Pantallas', stock: 1 }
];

// ======================================================
// RETO 4: forEach()
// ======================================================
productos.forEach((producto, indice) => {
  console.log(`${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`);
});

// ======================================================
// RETO 5: map()
// ======================================================
const nombres = productos.map(producto => producto.nombre);
console.log(nombres);

const preciosConIva = productos.map(producto => producto.precio * 1.19);
const nombresMayuscula = nombres.map(nombre => nombre.toUpperCase());
const resumenProductos = productos.map(producto => `${producto.nombre} cuesta $${producto.precio}`);

console.log(preciosConIva);
console.log(nombresMayuscula);
console.log(resumenProductos);

// ======================================================
// RETO 6: filter() y find()
// ======================================================
const disponibles = productos.filter(producto => producto.stock > 0);
console.log("Disponibles:", disponibles.length);

const caros = productos.filter(producto => producto.precio > 100000);
console.log("Precio > 100.000:", caros);

const rangoMedio = productos.filter(
  producto => producto.precio >= 50000 && producto.precio <= 200000
);
console.log("Entre 50.000 y 200.000:", rangoMedio);

const soloAudio = productos.filter(producto => producto.categoria === 'Audio');
console.log("Categoría Audio:", soloAudio);

const producto5 = productos.find(producto => producto.id === 5);
console.log("Producto con id 5:", producto5);

function buscarProducto(id) {
  return productos.find(producto => producto.id === id);
}
console.log("buscarProducto(3):", buscarProducto(3));
console.log("buscarProducto(99):", buscarProducto(99)); // undefined si no existe

// ======================================================
// RETO 7: some(), every() y reduce()
// ======================================================
const hayAgotados = productos.some(producto => producto.stock === 0);
console.log("¿Hay algún producto agotado?", hayAgotados);

const hayMuyCaros = productos.some(producto => producto.precio > 1000000);
console.log("¿Hay algún producto > $1.000.000?", hayMuyCaros);

const preciosValidos = productos.every(producto => producto.precio > 0);
console.log("¿Todos tienen precio > 0?", preciosValidos);

const stockValido = productos.every(producto => producto.stock >= 0);
console.log("¿Todos tienen stock >= 0?", stockValido);

const valorInventario = productos.reduce(
  (total, producto) => total + producto.precio * producto.stock,
  0
);
console.log("Valor total del inventario:", valorInventario);

// ======================================================
// RETO 8: JavaScript moderno
// ======================================================

// Template literal

console.log(`El producto ${productos[0].nombre} cuesta $${productos[0].precio}`);

// Desestructuración
const { nombre, precio, stock } = productos[0];
console.log(nombre, precio, stock);

// Spread
const productoActualizado = {
  ...productos[0],
  stock: 8
};

// Ternario
const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(estado);

// Tarea: copia de un producto cambiando precio y stock sin tocar el original
const copiaMonitor = { ...productos[2], precio: 600000, stock: 0 };
const estadoCopia = copiaMonitor.stock > 0 ? 'disponible' : 'agotado';
console.log(
  `La copia de ${copiaMonitor.nombre} cuesta $${copiaMonitor.precio} y está ${estadoCopia}`
);
console.log("Original intacto:", productos[2]); // precio 650000, stock 3