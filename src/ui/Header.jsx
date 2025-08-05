import { Link } from "react-router";

function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-background px-4 py-2 text-text">
      <Link to="/"> Let'sFood </Link>
      <div className="flex gap-x-6">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex gap-x-4">
        <Link to="/cart">Cart</Link>
        <Link to="/login">login</Link>
      </div>
    </header>
  );
}

export default Header;
