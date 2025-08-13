import React, { useContext, useState } from "react";
import "../../css/ProductInfo.css";
import CartContext from "../../context/CartProvider";
import { message } from "antd";

function ProductInfo({ product }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  if (!product) {
    return (
      <div className="product-info">
        <div className="loading">Ürün bilgileri yükleniyor...</div>
      </div>
    );
  }
  return (
    <div className="product-info">
      <h1 className="product-title">{product.name}</h1>
      <div className="product-review">
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
        <span>2 reviews</span>
      </div>
      <div className="product-price">
        <s className="old-price">${product.price.discount}</s>
        <strong className="new-price">${product.price.current}</strong>
      </div>
      <p
        className="product-description"
        dangerouslySetInnerHTML={{ __html: product.description }}
      ></p>
      <form className="variations-form">
        <div className="variations">
          <div className="colors">
            <div className="colors-label">
              <span>Color</span>
            </div>
            <div className="colors-wrapper">
              {product.color.map((color, index) => (
                <div
                  key={`${color}-${index}`}
                  className="color-wrapper"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          <div className="values">
            <div className="values-label">
              <span>Size</span>
            </div>
            <div className="values-list">
              {product.size.map((size) => (
                <span key={size}>{size}</span>
              ))}
            </div>
          </div>
          <div className="cart-button">
            <input
              type="number"
              defaultValue="1"
              min="1"
              id="quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              className="btn btn-lg btn-primary"
              id="add-to-cart"
              type="button"
              onClick={() => {
                addToCart(product, Number(quantity));
                message.success(`${product.name} added to cart`);
              }}
            >
              Add to cart
            </button>
          </div>
          <div className="product-extra-buttons">
            <a href="#">
              <i className="bi bi-globe"></i>
              <span>Size Guide</span>
            </a>
            <a href="#">
              <i className="bi bi-heart"></i>
              <span>Add to Wislist</span>
            </a>
            <a href="#">
              <i className="bi bi-share"></i>
              <span>Share this Product</span>
            </a>
          </div>
        </div>
      </form>
      <div className="divider"></div>
      <div className="product-meta">
        <div className="product-sku">
          <span>SKU:</span>
          <strong>{product._id}</strong>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
