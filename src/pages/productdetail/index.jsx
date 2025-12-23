import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-10">

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-lg"
      />

      {/* Details */}
      <div>
        <p className="text-sm text-gray-500">{product.category}</p>

        <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
        <p className="text-gray-600">{product.brand}</p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-green-600 font-semibold">
            {product.rating} ★
          </span>
          <span className="text-gray-500">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-4">
          <span className="text-2xl font-bold text-pink-600">
            ₹{product.price}
          </span>
          <span className="line-through text-gray-400">
            ₹{product.oldPrice}
          </span>
          <span className="text-green-600 font-semibold">
            {discount}% OFF
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-600">
          {product.description}
        </p>

        {/* Quantity */}
        <div className="mt-6">
          <label className="block mb-1 font-medium">Quantity</label>
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="border px-3 py-1 w-20"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-pink-500 text-white px-6 py-3 rounded">
            Add to Cart
          </button>
          <button className="border border-pink-500 text-pink-500 px-6 py-3 rounded">
            Buy Now
          </button>
        </div>

        {/* Benefits */}
        <div className="mt-8 space-y-2 text-sm text-gray-600">
          <p>🚚 Free Shipping on orders above ₹999</p>
          <p>✅ 100% Authentic – Genuine products guaranteed</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
