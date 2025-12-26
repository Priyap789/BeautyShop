import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";

function Navbar({ onLoginClick }) {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-pink-600 cursor-pointer"
          onClick={() => navigate("/")}>
        COSMO
      </h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 font-medium items-center">

        <li>
          <Link to="/" className="hover:text-pink-600">HOME</Link>
        </li>

        <li>
          <Link to="/products" className="hover:text-pink-600">
            PRODUCTS
          </Link>
        </li>

        <li>
          <Link to="/products/skincare" className="hover:text-pink-600">
            SKIN CARE
          </Link>
        </li>

        {/* MAKEUP */}
        <li className="relative group">
          <span className="cursor-pointer hover:text-pink-600">
            MAKE UP
          </span>

          <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-48 py-2 z-50">
            <li>
              <Link
                to="/products/makeup/lip"
                className="block px-4 py-2 hover:bg-pink-100"
              >
                LIP
              </Link>
            </li>
            <li>
              <Link
                to="/products/makeup/eyes"
                className="block px-4 py-2 hover:bg-pink-100"
              >
                EYES
              </Link>
            </li>
            <li>
              <Link
                to="/products/makeup/face"
                className="block px-4 py-2 hover:bg-pink-100"
              >
                FACE
              </Link>
            </li>
            <li>
              <Link
                to="/products/makeup/tools"
                className="block px-4 py-2 hover:bg-pink-100"
              >
                TOOLS
              </Link>
            </li>
          </ul>
        </li>

        {/* HAIR & BODY */}
        <li className="relative group">
          <span className="cursor-pointer hover:text-pink-600">
            HAIR & BODY
          </span>

          <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-60 py-2 z-50">
            <li>
              <Link
                to="/products/hair-body/shampoo-conditioner"
                className="block px-4 py-2 hover:bg-pink-100"
              >
                SHAMPOO & CONDITIONER
              </Link>
            </li>
            <li>
              <Link
                to="/products/hair-body/body-wash-cream"
                className="block px-4 py-2 hover:bg-pink-100"
              >
                BODY WASH AND CREAM
              </Link>
            </li>
          </ul>
        </li>

      </ul>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <Search className="cursor-pointer" />

        <ShoppingCart
          className="cursor-pointer"
          onClick={() => navigate("/products")}
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
