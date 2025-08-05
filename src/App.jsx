import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu />, errorElement: <Error /> },
      { path: "/cart", element: <Cart /> }
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
