const ProductDetail = ({ nombre, descripcion, precio, sku, cantidadDisponible }) => {
	return (
		<div className="bg-white p-8 rounded shadow-md">
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
		</div>
	)
}

export default ProductDetail
