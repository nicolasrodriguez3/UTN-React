import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"

function App() {
	return (
		<>
			<Navbar />
			<main className="py-24 mx-auto container max-w-5xl">
				<Outlet />
			</main>
		</>
	)
}

export default App
