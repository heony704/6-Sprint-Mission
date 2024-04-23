import "./index.css";

function ProductCard({ type = "big", product }) {
  const { name, images, price, favoriteCount } = product;

  return (
    <div className="product-card">
      <img
        className={`product-card-image ${type}`}
        src={images[0]}
        alt={`${name} 상품`}
      />
      <div className="product-card-description">
        <h3 className="product-card-name">{name}</h3>
        <h2 className="product-card-price">{price.toLocaleString()}원</h2>
        <div className="product-card-favorite">
          <img
            className="product-card-favorite-icon"
            src="images/ic_heart_inactive.svg"
            alt="빈 하트 아이콘"
          />
          <p className="product-card-favorite-count">{favoriteCount}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
