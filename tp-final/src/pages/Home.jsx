import { useEffect } from "react"
import { useState } from "react"
function Home() {
	const [productsData, setProductsData] = useState([])

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductsData(json))
	}, [])

	return (
		<>
			{productsData.map((product) => (
				<div key={product.id}>{product.title}</div>
			))}
		</>
	)
}
export default Home
