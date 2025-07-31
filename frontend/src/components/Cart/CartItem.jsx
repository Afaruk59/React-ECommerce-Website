import React from "react";
import "../../css/Cart.css";
function CartItem() {
  return (
    <tr className="cart-item">
      <td className="cart-image">
        <img src="img/products/product1/1.png" alt="" />
        <i className="bi bi-x delete-cart"></i>
      </td>
      <td>Sdslmdlsmd</td>
      <td>$200</td>
      <td className="product-quantity">1</td>
      <td className="product-subtotal">$200</td>
    </tr>
  );
}

export default CartItem;
