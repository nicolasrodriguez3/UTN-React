import { useState } from "react"
import Navbar from "../components/Navbar"
import { EyeIcon } from "../assets/EyeIcon"
import { EyeSlashIcon } from "../assets/EyeSlashIcon"

function Login() {
	const [showPassword, setShowPassword] = useState(false)
	const [userLogin, setUserLogin] = useState({
		email: "",
		password: "",
		remember: false,
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		console.log(userLogin)
		setUserLogin({
			...userLogin,
			[name]: value,
		})
	}
	const handleCheck = () => {
		setUserLogin({
			...userLogin,
			remember: !userLogin.remember,
		})
	}

	return (
		<div>
			<Navbar />
			<form className="max-w-sm mx-auto p-4 min-h-screen flex flex-col justify-start pt-32 ">
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
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}>
							{showPassword ? (
								<EyeSlashIcon className="text-gray-600 text-2xl" />
							) : (
								<EyeIcon className="text-gray-600 text-2xl" />
							)}
						</button>
					</div>
				</div>
				<div className="flex items-start mb-5">
					<div className="flex items-center h-5">
						<input
							id="remember"
							type="checkbox"
							value={Boolean(userLogin.remember)}
							onChange={handleCheck}
							className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
							required
						/>
					</div>
					<label
						htmlFor="remember"
						className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
						Guardar mis datos
					</label>
				</div>
				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Iniciar sesión
				</button>
			</form>
		</div>
	)
}
export default Login
