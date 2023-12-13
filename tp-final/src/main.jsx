import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import ProductDetail from "./components/ProductDetail.jsx"
import Home from "./pages/Home.jsx"
import { CartProvider } from "./context/CartContext.jsx"
import Login from "./pages/Login.jsx"
import { AuthProvider } from "./context/AuthContext.jsx"
import Register from "./pages/Register.jsx"
import NotFound from "./pages/NotFound.jsx"

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
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "*",
		element: <NotFound />
	}
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<CartProvider>
				<RouterProvider router={router} />
			</CartProvider>
		</AuthProvider>
	</React.StrictMode>
)
