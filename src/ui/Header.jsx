import { useSelector } from "react-redux";
import { Link } from "react-router";
import { Soup, LogIn, ShoppingCart } from "lucide-react";

function Header() {
  const username = useSelector((state) => state.user.username);

  return (
    <header className="bg-primary border-b py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-x-8">
        <div className="flex items-center gap-x-2">
          <Link to="/" className="font-semibold text-lg">
            Let'sFood
          </Link>
          <Soup className="text-secondary" />
        </div>

        <nav className="flex gap-x-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
        </nav>

        <input
          type="text"
          placeholder="Search meals..."
          className="px-3 py-1 rounded border border-gray-300 focus:outline-none"
        />

        <Link to="/cart">
          <ShoppingCart />
        </Link>

        <Link
          to="/login"
          className="flex items-center gap-x-2 bg-secondary hover:bg-orange-600 text-white px-4 py-2 rounded"
        >
          <LogIn className="w-5" />
          SignIn
        </Link>
      </div>
    </header>
  );
}

export default Header;
