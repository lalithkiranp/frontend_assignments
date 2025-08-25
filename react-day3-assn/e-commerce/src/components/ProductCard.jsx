function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-3" />
      <h3 className="text-sm font-semibold mb-2 text-center">{product.title}</h3>
      <p className="font-bold text-blue-600">${product.price}</p>
    </div>
  );
}

export default ProductCard;
