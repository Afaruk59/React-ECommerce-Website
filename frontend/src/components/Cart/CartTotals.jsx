import React, { useContext, useState } from "react";
import "../../css/Cart.css";
import CartContext from "../../context/CartProvider.jsx";
import { Button, message } from "antd";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

function CartTotals({ discount }) {
  const { cart, clearCart } = useContext(CartContext);
  const [fastCargo, setFastCargo] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = localStorage.getItem("user");

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handlePayment = async () => {
    setLoading(true);
    if (!user) {
      message.error("Please login to checkout");
      return;
    }
    const body = {
      products: cart,
      user: user,
      total: total,
      discount: discount || 0,
      fastCargo: fastCargo,
    };
    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_KEY);
      const response = await axios.post(`${apiUrl}/api/payment`, body);
      if (response.data.sessionId) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: response.data.sessionId,
        });
        if (error) {
          message.error("Payment failed");
        }
      } else {
        message.error("Payment failed");
      }
      clearCart();
    } catch (error) {
      message.error("Order failed to add");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price.current * item.quantity,
    0
  );
  const discountAmount = discount ? (subtotal * discount) / 100 : 0;
  const total = subtotal - discountAmount + (fastCargo ? 15 : 0);

  return (
    <div className="cart-totals">
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Subtotal</th>
            <td>
              <span id="subtotal">${subtotal.toFixed(2)}</span>
            </td>
          </tr>
          {discount > 0 && (
            <tr className="cart-discount">
              <th>Discount ({discount}%)</th>
              <td>
                <span id="discount" style={{ color: "#28a745" }}>
                  -${discountAmount.toFixed(2)}
                </span>
              </td>
            </tr>
          )}
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
              <strong id="cart-total">${total.toFixed(2)}</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <Button
        className="checkout"
        type="primary"
        block
        onClick={handlePayment}
        loading={loading}
      >
        Proceed to checkout
      </Button>
    </div>
  );
}

export default CartTotals;
