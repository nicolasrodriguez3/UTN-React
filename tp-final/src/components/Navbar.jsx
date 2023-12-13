import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import logoSmall from "/logo-utn-small.png"
import logoBig from "/logo-utn.png"
import Cart from "../components/Cart"
import { Link } from "react-router-dom"
import useDarkMode from "../hooks/useDarkMode"
import useViewportWidth from "../hooks/useViewportWidth"
import { useAuthContext } from "../hooks/useAuthContext"

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const isDarkMode = useDarkMode()
	const viewportWidth = useViewportWidth()
	const { user, gettingUser, logout } = useAuthContext()

	const logo = viewportWidth > 768 ? logoBig : logoSmall

	const handleOpenMenu = () => setIsMenuOpen(!isMenuOpen)

	return (
		<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img src={logo} className={`h-8 ${isDarkMode ? "invert" : ""}`} alt="Logo UTN" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden sm:block">
						E-commerce UTN
					</span>
				</NavLink>
				<div className="flex gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					{user ? (
						<button
							onClick={logout}
							className="text-gray-800 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 text-center dark:focus:ring-blue-800 flex items-center">
							Cerrar sesión
						</button>
					) : (
						<NavLink
							as="button"
							to="/login"
							className={({isActive}) => (`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center leading-none ${isActive ? "hidden" : ""}`)}>
							Iniciar sesión
						</NavLink>
					)}
					<Cart />
					<button
						onClick={handleOpenMenu}
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-sticky"
						aria-expanded="false">
						<span className="sr-only">Abrir menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>

				<div
					className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
						isMenuOpen ? "block" : "hidden"
					}`}>
					<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<NavLink
								to="/"
								className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
								aria-current="page">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/categories"
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
								Categorias (No funciona 🙁)
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Navbar
