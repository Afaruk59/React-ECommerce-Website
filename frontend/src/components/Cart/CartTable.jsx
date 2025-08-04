import React, { useContext } from "react";
import "../../css/Cart.css";
import CartItem from "./CartItem";
import CartContext from "../../context/CartProvider.jsx";
function CartTable() {
  const { cart } = useContext(CartContext);
  return (
    <table className="shop-table" style={{ marginLeft: "10px", width: "100%" }}>
      <thead>
        <tr>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-thumbnail">&nbsp;</th>
          <th className="product-name">Product</th>
          <th className="product-price">Price</th>
          <th className="product-quantity">Quantity</th>
          <th className="product-subtotal">Subtotal</th>
        </tr>
      </thead>
      <tbody className="cart-wrapper">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default CartTable;
