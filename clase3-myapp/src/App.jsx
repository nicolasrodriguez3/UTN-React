import { useState } from "react"
import ProductDetail from "./components/ProductDetail";

function App() {
  const productData = {
    nombre: 'Nombre del Producto',
    descripcion: 'Esta es la descripción del producto.',
    precio: 999,
    sku: 'ABC123',
    cantidadDisponible: 50,
  };

	return (
		<>
			<ProductDetail {...productData} />
		</>
	)
}

export default App

