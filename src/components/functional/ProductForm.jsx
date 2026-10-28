
import { useState, useRef, useEffect } from "react";

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Electronics");

  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (
      name.trim() === "" ||
      stock === "" ||
      !Number.isInteger(Number(stock)) ||
      Number(stock) < 0
    ) {
      alert("Enter a valid product name and whole stock quantity.");
      return;
    }

    onAddProduct({
      id: Date.now(),
      name: name.trim(),
      stock: Number(stock),
      category: category
    });

    setName("");
    setStock("");
    setCategory("Electronics");
    nameRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>Add New Product</h2>

      <input
        ref={nameRef}
        type="text"
        placeholder="Product name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="number"
        min="0"
        step="1"
        placeholder="Stock quantity"
        value={stock}
        onChange={(event) => setStock(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option>Electronics</option>
        <option>Accessories</option>
        <option>Other</option>
      </select>

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
