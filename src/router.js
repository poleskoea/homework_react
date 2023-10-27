import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/menu",
    element: <Menu />,
    children: [{ path: "" }, { path: ":name", element: <MenuItem /> }],
  },
]);
