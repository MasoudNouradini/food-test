import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/layout/AppLayout";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Login from "./features/user/Login";
import Signup from "./features/user/Signup";
import ProtectedRoute from "./pages/layout/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader
      },
      {
        element: <ProtectedRoute />,
        children: [{ path: "/cart", element: <Cart /> }]
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> }
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
