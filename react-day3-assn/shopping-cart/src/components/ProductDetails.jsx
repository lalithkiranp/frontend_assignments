import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return null;

  return (
    <div className="max-w-2xl mx-auto border rounded-lg shadow p-6">
      <img src={product.image} alt={product.title} className="h-60 object-contain mx-auto mb-4" />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-lg font-semibold text-blue-600 mb-2">${product.price}</p>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-yellow-600 font-semibold">
        ⭐ Rating: {product.rating?.rate} ({product.rating?.count} reviews)
      </p>
      <Link to="/" className="inline-block mt-4 px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200">
        ⬅ Back to Products
      </Link>
    </div>
  );
}

export default ProductDetails;
