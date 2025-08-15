import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router";

function ProtectedRoute() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="login" />;
}

export default ProtectedRoute;
