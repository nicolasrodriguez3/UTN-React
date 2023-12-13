import { useState } from "react"
import { createContext } from "react"

const CartContext = createContext()

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])
	const [isCartOpen, setIsCartOpen] = useState(false)

	// Abrir y cerrar el carrito
	const toggleCart = () => setIsCartOpen(!isCartOpen)

	// Agrega un artículo al carrito
	const addToCart = (item) => {
		setCart((prevCart) => [...prevCart, item])
	}

	// Remueve un artículo del carrito
	const removeFromCart = (itemToRemove) => {
		setCart((prevCart) => prevCart.filter((item) => item !== itemToRemove))
	}

	// Limpia completamente el carrito
	const clearCart = () => {
		setCart([])
	}

	const getTotalItems = () => {
		return cart.length
	}

	const getTotalPrice = () => {
		return cart.reduce((total, item) => total + (item.price || 0), 0)
	}

	const contextValue = {
		cart,
		addToCart,
		removeFromCart,
		clearCart,
		getTotalItems,
		getTotalPrice,
		isCartOpen,
		toggleCart,
	}

	return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

export { CartContext, CartProvider }
