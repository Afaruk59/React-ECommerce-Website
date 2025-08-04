import React, { useContext } from "react";
import "../../css/Cart.css";
import CartContext from "../../context/CartProvider.jsx";
function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);
  return (
    <tr className="cart-item">
      <td className="cart-image">
        <img src={item.img.singleImage} alt="" />
        <i
          className="bi bi-x delete-cart"
          onClick={() => removeFromCart(item.id)}
        ></i>
      </td>
      <td>{item.name}</td>
      <td>${item.price.newPrice.toFixed(2)}</td>
      <td className="product-quantity">{item.quantity}</td>
      <td className="product-subtotal">
        ${(item.price.newPrice * 1).toFixed(2)}
      </td>
    </tr>
  );
}

export default CartItem;
