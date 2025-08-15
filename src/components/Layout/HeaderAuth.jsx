import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/user/userSlice";
import { Link } from "react-router";
import { LogOut,LogIn } from "lucide-react";

function HeaderAuth() {
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();

return (
  <>
    {isLoggedIn ? (
      <>
<span className="flex items-center gap-2 bg-orange-light text-text px-3 py-1 rounded-full text-sm font-medium">
  Hi, <span className="text-orange-dark font-bold">{user?.name}</span>
</span>
       <button
            onClick={() => dispatch(logout())}
            className="flex rounded items-center gap-x-2 bg-error hover:bg-red-dark text-white px-4 py-2"
          >
            <LogOut className="w-5" />
            Logout
          </button>

      </>
    ) : (
    <Link
          to="/login"
          className="flex rounded items-center gap-x-2 bg-secondary hover:bg-orange-dark text-white px-4 py-2"
        >
          <LogIn className="w-5" />
          SignIn
        </Link>    )}
  </>
);
}

export default HeaderAuth;
