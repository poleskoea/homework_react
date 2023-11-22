import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import About from "./components/About";
import Main from "./Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Main /> },
      {
        path: "/menu",
        element: <Menu />,
        children: [{ path: "" }, { path: ":name", element: <MenuItem /> }],
      },
      { path: "/about", element: <About /> },
    ],
  },
]);
