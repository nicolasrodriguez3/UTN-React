import { Link } from "react-router-dom"

function NotFound() {
	return (
		<main className="text-white relative">
			<div className="w-full min-h-screen bg-[url('/concepto-sitio-web.jpg')] bg-center">
				<div className="w-full min-h-screen bg-black/50 flex flex-col justify-center items-center ">
					<div className="flex gap-4 items-center mb-4">
						<p>Upss, página no encontrada</p>
						<hr className="h-12 border" />
						<h1 className="text-4xl">404</h1>
					</div>
					<Link
						href="/"
						className="text-white underline text-lg hover:text-blue-300">
						Ir a inicio
					</Link>
				</div>
			</div>
		</main>
	)
}
export default NotFound