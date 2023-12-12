import { useEffect } from "react"
import { useState } from "react"
import ProductCard from "../components/ProductCard"
function Home() {
	const [productsData, setProductsData] = useState([])

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/products")
			.then((res) => res.json())
			.then((json) => {
				console.log(json)
				return setProductsData(json)
			})
	}, [])

	return (
		<main className="grid grid-cols-[repeat(auto-fit,_minmax(275px,_1fr))] gap-4 px-4">
			{productsData.map((product) => (
				<ProductCard
					product={product}
					key={product.id}
				/>
			))}
		</main>
	)
}
export default Home
