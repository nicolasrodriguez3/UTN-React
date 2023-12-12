import { useState } from "react"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {
	return (
		<>
			<Navbar />
			<h1 className="text-center">Antito</h1>
			<Home />
		</>
	)
}

export default App

