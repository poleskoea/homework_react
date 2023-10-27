import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/cart",
    element: (
      <div>
        <h1>Cart</h1>
      </div>
    ),
  },
]);
