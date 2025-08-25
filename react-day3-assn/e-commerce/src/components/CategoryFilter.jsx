function CategoryFilter({ setCategory }) {
  const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

  return (
    <div className="flex justify-center gap-4 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className="px-4 py-2 border rounded hover:bg-gray-200"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
