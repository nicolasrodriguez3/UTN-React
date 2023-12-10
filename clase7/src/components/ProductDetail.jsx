const ProductDetail = ({ nombre, descripcion, precio, sku, cantidadDisponible, handleBuy }) => {
	

	return (
		<div className="w-full max-w-lg bg-white p-8 rounded shadow-md text-gray-900">
			<h2 className="text-2xl font-bold mb-4">{nombre}</h2>
			<p className="mb-2">
				<strong>Descripción:</strong> {descripcion}
			</p>
			<p className="mb-2">
				<strong>Precio:</strong> ${precio}
			</p>
			<p className="mb-2">
				<strong>SKU:</strong> {sku}
			</p>
			<p className="mb-2">
				<strong>Cantidad Disponible:</strong> {cantidadDisponible}
			</p>

			<button onClick={() => handleBuy(nombre)}>Comprar</button>
		</div>
	)
}

export default ProductDetail
