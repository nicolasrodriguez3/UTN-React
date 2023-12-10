import { useState } from "react"
import ProductDetail from "./components/ProductDetail"

const productData = [
	{
		nombre: "Producto 1",
		descripcion: "Esta es la descripción del producto.",
		precio: 999,
		sku: "ABC123",
		cantidadDisponible: 50,
	},
	{
		nombre: "Producto 2",
		descripcion: "Esta es la descripción del producto 2.",
		precio: 1999,
		sku: "ABC124",
		cantidadDisponible: 100,
	},
]

function App() {
	const [productSelected, setProductSelected] = useState(null)

	const handleBuy = (product) => {
		setProductSelected(product)
	}

	return (
		<main className="w-full flex flex-col items-center justify-center gap-4 p-4">
			{productSelected && (
				<div>
					<p className="text-xl my-4 italic">Gracias por su compra de: {productSelected}</p>
					<button onClick={() => setProductSelected(null)}>Cancelar</button>
				</div>
			)}
			{productData.map((product) => (
				<ProductDetail key={product.sku} {...product} handleBuy={handleBuy} />
			))}
		</main>
	)
}

export default App
