import React from "react";
import "./ClothStore.css"; // Import the CSS file

function ClothStore() {
  const products = [
    {
      productId: 101,
      productName: "T-Shirt",
      description: "Cotton material",
      price: 499,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      productId: 102,
      productName: "Jeans",
      description: "Slim fit denim",
      price: 1299,
      sizes: ["M", "L", "XL"],
    },
    {
      productId: 103,
      productName: "Jacket",
      description: "Winter collection",
      price: 2499,
      sizes: ["L", "XL"],
    },
  ];

  return (
    <div className="cloth-store">
      <h2>Cloth Store</h2>

      {products.length === 0 ? (
        <p>No Products Available</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Description</th>
              <th className="price-column">Price (₹)</th>
              <th>Available Sizes</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.description}</td>
                <td className="price-column">₹{product.price}</td>
                <td>{product.sizes.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ClothStore;
