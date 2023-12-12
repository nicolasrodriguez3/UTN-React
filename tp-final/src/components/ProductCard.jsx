import { Link } from "react-router-dom"

function ProductCard({ product }) {
	return (
		<div
			className="w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<Link to={`/product/${product.id}`}>
				<img className="p-6 rounded-t-lg" src={product.images[0]} alt={product.title} />
			</Link>
			<div className="px-5 pb-5">
				<Link to={`/product/${product.id}`}>
					<h5 className="text-xl mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">
						{product.title}
					</h5>
				</Link>
				<div className="flex items-center justify-between gap-2 flex-wrap ">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
					<button
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Añadir al carrito
					</button>
				</div>
			</div>
		</div>
	)
}
export default ProductCard
