import React, { useContext, useState } from "react";
import "../../css/Cart.css";
import CartContext from "../../context/CartProvider.jsx";
function CartTotals() {
  const { cart } = useContext(CartContext);
  const [fastCargo, setFastCargo] = useState(false);
  return (
    <div className="cart-totals">
      <h2>Cart totals</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Subtotal</th>
            <td>
              <span id="subtotal">
                $
                {(
                  cart.reduce(
                    (acc, item) => acc + item.price.newPrice * item.quantity,
                    0
                  ) + (fastCargo ? 15 : 0)
                ).toFixed(2)}
              </span>
            </td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>
              <ul>
                <li>
                  <label>
                    Fast Cargo: $15.00
                    <input
                      type="checkbox"
                      id="fast-cargo"
                      onChange={() => {
                        setFastCargo(!fastCargo);
                      }}
                    />
                  </label>
                </li>
                <li>
                  <a href="#">Change Address</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              <strong id="cart-total">
                $
                {(
                  cart.reduce(
                    (acc, item) => acc + item.price.newPrice * item.quantity,
                    0
                  ) + (fastCargo ? 15 : 0)
                ).toFixed(2)}
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-lg">Proceed to checkout</button>
      </div>
    </div>
  );
}

export default CartTotals;
