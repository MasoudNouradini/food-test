import { Link } from "react-router-dom";
import { Soup, Menu as MenuIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../features/search/headerInputSlice";
import HeaderAuth from "./HeaderAuth";
import CartButtonPreview from "./CartButtonPreview";
import { useState } from "react";

function Header() {
  const dispatch = useDispatch();
  const query = useSelector(state => state.search.query);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  

  return (
    <>
      <header className="bg-primary border-b-2">
        {/* ردیف اول - لوگو و منو */}
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 gap-4">
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl sm:text-2xl">
              Let'sFood <Soup className="text-secondary hidden sm:block" />
            </Link>
            {/* سبد خرید در موبایل */}
            <div className="sm:hidden mt-1">
              <CartButtonPreview />
            </div>
          </div>

          <nav className="hidden sm:flex gap-x-6 text-sm font-semibold">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
          </nav>

          <div className="hidden sm:block flex-1 max-w-sm mx-4">
            <input
              type="text"
              placeholder="Search meals..."
              value={query}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              className="sm:hidden p-2 rounded hover:bg-gray-200"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <MenuIcon className="w-6 h-6 text-gray-700" />
            </button>

            {/* دسکتاپ → هر دو کنار هم */}
            <div className="hidden sm:flex items-center gap-4">
              <CartButtonPreview />
              <HeaderAuth />
            </div>

            {/* موبایل → فقط signin */}
            <div className="sm:hidden">
              <HeaderAuth />
            </div>
          </div>
        </div>

        {/* منوی موبایل */}
        {isMenuOpen && (
          <nav className="sm:hidden px-4 py-2 flex flex-col gap-2 bg-primary border-t border-gray-200">
            <Link
              to="/"
              className="py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
          </nav>
        )}

        {/* جستجوی موبایل */}
        <div className="sm:hidden px-4 py-2 bg-primary border-b border-gray-200">
          <input
            type="text"
            placeholder="Search meals..."
            value={query}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
          />
        </div>
      </header>
    </>
  );

}

export default Header;
