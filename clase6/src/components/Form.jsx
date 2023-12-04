import { useState } from "react"
import "./Form.css"
function Form() {
	const [formData, setFormData] = useState({
		nombre: "",
		apellido: "",
		email: "",
		telefono: "",
		password: "",
		confirmPassword: "",
	})

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prevData) => ({ ...prevData, [name]: value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Aquí puedes agregar la lógica para enviar los datos del formulario a tu backend o realizar la validación que necesites.
		console.log(formData)
	}

	return (
		<form onSubmit={handleSubmit} className="form-container">
				<label>
					Nombre:
					<input
						type="text"
						name="nombre"
						value={formData.nombre}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Apellido:
					<input
						type="text"
						name="apellido"
						value={formData.apellido}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Teléfono:
					<input
						type="tel"
						name="telefono"
						value={formData.telefono}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						required
					/>
				</label>
				<label>
					Confirmar Password:
					<input
						type="password"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={handleChange}
						required
					/>
				</label>
				<button type="submit">
					Registrarse
				</button>
			</form>
	)
}
export default Form