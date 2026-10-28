
function ProductCard({ name, stock, onDelete }) {
  return (
    <div className="product">
      <div>
        <strong>{name}</strong>
        <p>{stock} in stock</p>
      </div>

      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ProductCard;
