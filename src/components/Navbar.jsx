import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";

function Navbar({ onLoginClick }) {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-pink-600">
        COSMO
      </h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 font-medium">
        <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
        <li><Link to="/products" className="hover:text-pink-600">Products</Link></li>
        <li><Link to="/category/skincare" className="hover:text-pink-600">Skincare</Link></li>
        <li><Link to="/category/makeup" className="hover:text-pink-600">Makeup</Link></li>
        <li><Link to="/category/haircare" className="hover:text-pink-600">Haircare</Link></li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <Search className="cursor-pointer" />

        {/* Cart click → Product detail page */}
        <ShoppingCart
          className="cursor-pointer"
          onClick={() => navigate("/product/1")}
        />

        <button
          onClick={onLoginClick}
          className="bg-pink-500 text-white px-4 py-1 rounded-full"
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
