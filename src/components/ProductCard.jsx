function ProductCard({ name, price }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg text-center">
      <div className="h-40 bg-red-200 rounded mb-3"></div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-red-600 font-bold">{price}</p>
      <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
