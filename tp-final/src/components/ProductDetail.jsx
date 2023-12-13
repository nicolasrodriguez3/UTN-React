import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useCartContext } from "../hooks/useCartContext"

function ProductDetail() {
	const { addToCart } = useCartContext()
	const [product, setProduct] = useState(null)
	const [imgActive, setImgActive] = useState(null)
	const [error, setError] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		setError(null)

		fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
			.then((res) => (res.status === 200 ? res.json() : Promise.reject()))
			.then((data) => {
				setProduct(data)
				setImgActive(data.images[0])
			})
			.catch((e) => {
				console.error(e)
				setError("Ocurrio un error al cargar el producto 🙁")
			})
	}, [id])

	if (error) {
		return <p>{error}</p>
	}

	if (!product) {
		return <div>Cargando producto..</div>
	}

	return (
		<main>
			<div className="w-full min-h-screen flex flex-col md:flex-row max-w-7xl mx-auto">
				<div className="p-6 flex flex-col gap-4 justify-center">
				<img src={imgActive} alt={product.title} />
					{product.images.length > 1 && (
						<div className="flex gap-2 w-full ">
							{product.images.map((img) => (
								<img src={img} key={img} onMouseEnter={() => setImgActive(img)} className="w-20"/>
							))}
						</div>
					)}
				</div>
				<div className="p-5 flex flex-col gap-4 justify-center">
					<h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{product.title}
					</h5>
					<div className="text-gray-900 dark:text-white">
						<p className="text-3xl mb-4 font-bold ">
							${product.price}
						</p>
						<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => addToCart(product)}>
							Añadir al carrito
						</button>
					</div>
					<div className="py-4">{product.description}</div>
				</div>
			</div>
		</main>
	)
}
export default ProductDetail
