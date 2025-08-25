import { useState } from "react";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("all");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">E-Commerce Store</h1>
      <CategoryFilter setCategory={setCategory} />
      <ProductList category={category} />
    </div>
  );
}

export default App;
