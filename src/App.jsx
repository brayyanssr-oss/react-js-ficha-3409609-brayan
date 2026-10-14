import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const disponibles = productos.filter(producto => producto.stock > 0);
  const hayAgotados = productos.some(producto => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>
      <p>
        {hayAgotados
          ? 'Atención: hay al menos un producto agotado.'
          : 'Todos los productos tienen stock.'}
      </p>

      <h2>Catálogo completo</h2>
      <section className="productos">
        {productos.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>

      <h2>Solo productos disponibles</h2>
      <section className="productos">
        {disponibles.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>
    </main>
  );
}

export default App;