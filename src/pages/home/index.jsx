import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";

function Home() {
  return (
    <>
      <Navbar />

      <div className="flex items-center gap-3">
        <img
           src="/image/Skin_care.jpg"
          alt="Beauty Logo"
          className="h-100% w-100% object-contain"
        /></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
        <ProductCard name="Lipstick" price="₹499" />
        <ProductCard name="Face Cream" price="₹699" />
        <ProductCard name="Perfume" price="₹999" />
      </div>
    </>
  );
}


export default Home;
