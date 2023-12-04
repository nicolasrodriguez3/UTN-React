const $select = document.getElementById("tipoSeguro")
const $p = document.getElementById("precioSeguro")

const precios = {
	basico: {
		name: "Básico",
		price: 500,
	},
	intermedio: {
		name: "Intermedio",
		price: 1000,
	},
	premium: {
		name: "Premium",
		price: 1500,
	},
}

$select.addEventListener("change", (e) => {
	const seguro = precios[e.target.value]
	if (!seguro) {
		return ($p.innerText = "Seleccione un tipo de seguro para ver su precio.")
	}
	$p.innerText = `Seguro ${seguro.name}: $${seguro.price}`
})
