import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"
import ProductDetail from "./components/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)

