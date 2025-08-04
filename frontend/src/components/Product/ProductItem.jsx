import React, { useContext } from "react";
import "../../css/ProductItem.css";
import CartContext from "../../context/CartProvider.jsx";

function ProductItem({ product }) {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <li className="product-item glide__slide">
      <div className="product-image">
        <a href="#">
          <img src={product.img.singleImage} alt="" className="img1" />
          <img src={product.img.thumbs[1]} alt="" className="img2" />
        </a>
      </div>
      <div className="product-info">
        <a href="$" className="product-title">
          {product.name}
        </a>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">
            ${product.price.newPrice.toFixed(2)}
          </strong>
          <span className="old-price">
            ${product.price.oldPrice.toFixed(2)}
          </span>
        </div>
        <span className="product-discount">-{product.discount}%</span>
        <div className="product-links">
          <button
            onClick={() => addToCart(product)}
            disabled={cart.some((item) => item.id === product.id)}
          >
            <i className="bi bi-basket-fill"></i>
          </button>
          <button>
            <i className="bi bi-heart-fill"></i>
          </button>
          <a href={`/product/${product.id}`}>
            <i className="bi bi-eye-fill"></i>
          </a>
          <a href="#">
            <i className="bi bi-share-fill"></i>
          </a>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
