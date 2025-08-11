import { Link } from "react-router";
import { Soup, LogIn } from "lucide-react";
import CartButtonPreview from "../components/CartButtonPreview";

function Header() {
  return (
    <header className="bg-primary border-b-2 py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-x-8">
        <div className="flex items-center gap-x-6">
          <Link
            to="/"
            className="flex items-center gap-x-2  text-2xl font-bold"
          >
            Let'sFood <Soup className="text-secondary" />
          </Link>
          <nav className="flex gap-x-6 text-sm font-semibold">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
          </nav>
        </div>

        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search meals..."
            className="w-full max-w-sm px-3 py-1 rounded border border-gray-300 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-x-11">
          <CartButtonPreview />
          <Link
            to="/login"
            className="flex items-center gap-x-2 bg-secondary hover:bg-orange-600 text-white px-4 py-2 rounded"
          >
            <LogIn className="w-5" />
            SignIn
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
