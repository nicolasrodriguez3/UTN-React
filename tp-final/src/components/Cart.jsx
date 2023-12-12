import { useState } from "react"
import { useCartContext } from "../hooks/useCartContext"

const Cart = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { cart, removeFromCart, clearCart, getTotalItems, getTotalPrice } = useCartContext()

	const toggleCart = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen)
	}

	return (
		<div className="relative">
			<button
				type="button"
				onClick={toggleCart}
				className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
				<svg
					className="w-6 h-6 text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 18 20">
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
					/>
				</svg>
				<span className="sr-only">Carrito de compras</span>
				{getTotalItems() > 0 && (
					<div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
						{getTotalItems()}
					</div>
				)}
			</button>

			{isOpen && (
				<div className="absolute top-0 end-0 mt-12 mr-4 min-w-[300px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 transition-all duration-300">
					<h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2>

					{cart.length === 0 ? (
						<p className="text-gray-600 dark:text-gray-400">Tu carrito está vacío.</p>
					) : (
						<div>
							<ul className="divide-y divide-gray-200 dark:divide-gray-700">
								{cart.map((item, index) => (
									<li
										key={index}
										className="py-3">
										<div className="flex justify-between items-center">
											<span>{item.title}</span>
											<div className="flex items-center space-x-2">
												<span className="font-semibold">${item.price}</span>
												<button
													className="text-red-500 hover:text-red-700"
													onClick={() => removeFromCart(item)}>
													Eliminar
												</button>
											</div>
										</div>
									</li>
								))}
							</ul>

							<div className="mt-4 flex justify-between items-center">
								<p className="text-lg font-semibold">Total:</p>
								<p className="text-lg">${getTotalPrice().toFixed(2)}</p>
							</div>

							<div className="mt-4">
								<button
									className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
									onClick={clearCart}>
									Vaciar Carrito
								</button>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Cart
