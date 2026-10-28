
import { useState, useEffect, useMemo, useCallback } from "react";
import "./App.css";
import { useTheme } from "./ThemeContext";
import AuditLogger from "./components/functional/class/AuditLogger";
import ProductForm from "./components/functional/ProductForm";
import ProductList from "./components/functional/ProductList";
import CardWrapper from "./components/functional/CardWrapper";

const initialProducts = [
  { id: 1, name: "Wireless Mouse", stock: 50, category: "Accessories" },
  { id: 2, name: "Keyboard", stock: 80, category: "Electronics" },
  { id: 3, name: "Headphones", stock: 20, category: "Electronics" }
];

function App() {
  const { theme, toggleTheme } = useTheme();

  const [products, setProducts] = useState(() => {
    try {
      const savedProducts = localStorage.getItem("inventoryProducts");

      return savedProducts === null
        ? initialProducts
        : JSON.parse(savedProducts);
    } catch {
      return initialProducts;
    }
  });

  useEffect(() => {
    localStorage.setItem("inventoryProducts", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    document.title = "Inventory Dashboard";
  }, []);

  const addProduct = useCallback((newProduct) => {
    setProducts((previousProducts) => [
      ...previousProducts,
      newProduct
    ]);
  }, []);

  const deleteProduct = useCallback((id) => {
    setProducts((previousProducts) =>
      previousProducts.filter((product) => product.id !== id)
    );
  }, []);

  const totalStock = useMemo(() => {
    return products.reduce(
      (total, product) => total + product.stock,
      0
    );
  }, [products]);

  const lowStock = useMemo(() => {
    return products.filter(
      (product) => product.stock <= 10
    ).length;
  }, [products]);

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Inventory Dashboard</h1>
        <p>Manage your products and stock</p>

        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </header>

      <div className="cards">
        <CardWrapper>
          <h3>Total Products</h3>
          <h2>{products.length}</h2>
        </CardWrapper>

        <CardWrapper>
          <h3>Total Stock</h3>
          <h2>{totalStock}</h2>
        </CardWrapper>

        <CardWrapper>
          <h3>Low Stock</h3>
          <h2>{lowStock}</h2>
        </CardWrapper>
      </div>

      <ProductForm onAddProduct={addProduct} />

      <ProductList
        products={products}
        onDeleteProduct={deleteProduct}
      />

      <AuditLogger />
    </div>
  );
}

export default App;
