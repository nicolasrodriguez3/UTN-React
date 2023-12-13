import { useEffect } from "react"
import { useState } from "react"
import ProductCard from "../components/ProductCard"
import { Spinner } from "../assets/Spinner"
function Home() {
	const [productsData, setProductsData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((res) => (res.ok ? res.json() : Promise.reject()))
			.then((json) => {
				console.log(json)
				return setProductsData(json)
			})
			.catch(() => setError(`Ocurrió un error al cargar los productos`))
			.finally(setLoading(false))
	}, [])

	if (error) {
		return <main className="px-4">{error}</main>
	}

	return (
		<main className="grid grid-cols-[repeat(auto-fit,_minmax(275px,_1fr))] gap-4 px-4">
			{loading ? (
				<div className="flex flex-col items-center w-full gap-2">
					<Spinner />
					<p className="text-sm">Cargando productos</p>
				</div>
			) : (
				productsData.map((product) => <ProductCard product={product} key={product.id} />)
			)}
		</main>
	)
}
export default Home
