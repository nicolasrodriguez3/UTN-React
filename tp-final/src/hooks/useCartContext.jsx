import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function useCartContext() {
	const context = useContext(CartContext)

	if (!context) {
		throw new Error("useCartContext must be used within a CartContextProvider")
	}

	return context
}
export { useCartContext }
