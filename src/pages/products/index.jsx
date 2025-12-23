import Navbar from "../../components/Navbar";
import ProductGrid from "../../components/ProductGrid";
import products from "../../data/products";

function ProductsPage() {
  return (
    <>
      <Navbar />

      <div className="px-6 py-10">
        <h1 className="text-3xl font-bold text-pink-700 mb-6">
          All Products
        </h1>

        <ProductGrid products={products} />
      </div>
    </>
  );
}

export default ProductsPage;
