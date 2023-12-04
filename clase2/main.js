const $resultado = document.getElementById("resultado")

const getNumbers = () => {
	const $operando1 = document.getElementById("operando1").value,
	$operando2 = document.getElementById("operando2").value

	return [Number($operando1), Number($operando2)]
}

const sumar = () => {
	const [a ,b] = getNumbers()

	$resultado.value = a + b
}
const restar = () => {
	const [a ,b] = getNumbers()

	$resultado.value = a - b
}
const multiplicar = () => {
	const [a ,b] = getNumbers()

	$resultado.value = a * b
}
const dividir = () => {
	const [a ,b] = getNumbers()
	if( b === 0) return $resultado.value = "No es posible dividir por 0"

	$resultado.value = a / b
}