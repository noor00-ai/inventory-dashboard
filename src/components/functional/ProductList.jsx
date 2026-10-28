
import ProductCard from "./ProductCard";

function ProductList({ products, onDeleteProduct }) {
  return (
    <div className="products">
      <h2>My Products</h2>

      {products.length === 0 ? (
        <p>No products available. Add your first product!</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            stock={product.stock}
            onDelete={() => onDeleteProduct(product.id)}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
