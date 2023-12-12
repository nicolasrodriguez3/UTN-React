import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import ProductDetail from "./components/ProductDetail.jsx"
import Home from "./pages/Home.jsx"
import { CartContextProvider } from "./context/CartContext.jsx"
import Login from "./pages/Login.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/product/:id",
				element: <ProductDetail />,
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<CartContextProvider>
			<RouterProvider router={router} />
		</CartContextProvider>
	</React.StrictMode>
)
