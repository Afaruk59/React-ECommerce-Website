import { createContext, useEffect, useState } from "react";
import { message } from "antd";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingItem = cart.find((item) => item._id === product._id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + Number(quantity) }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: Number(quantity) }]);
    }
  };

  const removeFromCart = (id) => {
    const item = cart.find((item) => item._id === id);
    setCart(cart.filter((item) => item._id !== id));
    message.success(`${item.name} removed from cart`);
  };

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
