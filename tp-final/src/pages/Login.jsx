import { useState } from "react"
import Navbar from "../components/Navbar"
import { useEffect } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { EyeIcon } from "../assets/EyeIcon"
import { EyeSlashIcon } from "../assets/EyeSlashIcon"
import { Spinner } from "../assets/Spinner"
import google from "../assets/google.svg"
import facebook from "../assets/facebook.svg"
import { Navigate } from "react-router-dom"
import { Link } from "react-router-dom"

function Login() {
	const { user, signInWithEmail, signInWithGoogle, signInWithFacebook, error, loading, gettingUser } = useAuthContext()
	const [remember, setRemember] = useState(!!window.localStorage.getItem("email"))
	const [userLogin, setUserLogin] = useState(() => {
		const storedEmail = window.localStorage.getItem("email")
		return {
			email: storedEmail || "",
			password: "",
		}
	})
	const [showPassword, setShowPassword] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		console.log(userLogin)
		setUserLogin({
			...userLogin,
			[name]: value,
		})
	}
	const handleCheck = () => {
		setRemember(!remember)
	}

	useEffect(() => {
		if (remember) {
			window.localStorage.setItem("email", userLogin.email)
		} else {
			window.localStorage.removeItem("email")
		}
	}, [userLogin.email, remember])

	const handleSubmit = (e) => {
		e.preventDefault()
		signInWithEmail(userLogin.email, userLogin.password)
	}

	if(!gettingUser && user) {
		return (
			<Navigate to="/" />
		)
	}

	return (
		<div className="min-h-screen flex flex-col justify-start items-center pt-[max(120px,10vw)]">
			<Navbar />
			<form className="max-w-sm w-full mx-auto p-2" 
			onSubmit={handleSubmit} >
				<h2 className="text-2xl mb-4">Iniciar sesión</h2>
				<div className="mb-5">
					<label
						htmlFor="email"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Correo
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="hola@tucorreo.com"
						required
						value={userLogin.email}
						onChange={handleChange}
					/>
				</div>
				<div className="mb-5">
					<label
						htmlFor="password"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Contraseña
					</label>
					<div className="flex items-center gap-2">
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							name="password"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
							value={userLogin.password}
							onChange={(e) => handleChange(e)}
						/>
						<button type="button" onClick={() => setShowPassword(!showPassword)}>
							{showPassword ? (
								<EyeSlashIcon className="text-gray-600 dark:text-gray-100 text-2xl" />
							) : (
								<EyeIcon className="text-gray-600 dark:text-gray-100 text-2xl" />
							)}
						</button>
					</div>
				</div>
				<div className="flex items-start mb-5">
					<div className="flex items-center h-5">
						<input
							id="remember"
							type="checkbox"
							checked={remember}
							onChange={handleCheck}
							className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
							required
						/>
					</div>
					<label
						htmlFor="remember"
						className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Recordar mi correo
					</label>
				</div>
				{error && <p className="text-red-400 mb-2">{error}</p>}
				<button
					disabled={loading}
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-80 flex gap-2 items-center justify-center">
					Iniciar sesión
					{loading && <Spinner />}
				</button>
				<p className="mt-4">¿No tenes cuenta? <Link to="/register" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 font-medium">Registrate</Link></p>
			</form>
			<section className="flex flex-col place-items-center p-2 mt-2 max-w-sm w-full">
					<p className="text-center mb-2">O iniciar sesión con:</p>
					<div className="flex gap-4">
						<button
							className="h-12 bg-inherit"
							onClick={signInWithGoogle}>
							<img
								src={google}
								width={40}
							/>
						</button>
						<button
							className="h-12 bg-inherit"
							onClick={signInWithFacebook}>
							<img
								src={facebook}
								width={40}
							/>
						</button>
					</div>
				</section>
		</div>
	)
}
export default Login
