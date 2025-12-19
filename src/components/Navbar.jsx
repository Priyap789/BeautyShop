import { Link } from "react-router-dom";

function Navbar() {
  return (
    
    <nav className="flex justify-between items-center p-4 bg-white-500 text-red-800 font-bold">
      <div className="flex items-center gap-3">
        <img
           src="/image/img.png"
          alt="Beauty Logo"
          className="h-12 w-15 object-contain"
        /></div>
      <h1 className="text-xl text-right font-bold"></h1>
      
      <div className="space-x-4 ">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
