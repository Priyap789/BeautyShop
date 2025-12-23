import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import Home from "./pages/home";
import ProductsPage from "./pages/products";
import Offers from "./pages/offers";
import CategoryPage from "./pages/category";



function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/offers" element={<Offers />} />
    </Routes>
  );
}

export default App;
