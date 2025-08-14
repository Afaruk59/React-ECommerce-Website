import React, { useContext, useEffect } from "react";
import { Result, Button } from "antd";
import CartContext from "../context/CartProvider";

function Success() {
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <div className="success-page" style={{ height: "50vh" }}>
      <Result
        status="success"
        title="Ödemeniz başarıyla tamamlandı!"
        subTitle="Sipariş numaranız: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button
            onClick={() => (window.location.href = "/cart")}
            type="default"
            key="console"
          >
            Siparişlerim
          </Button>,
          <Button
            onClick={() => (window.location.href = "/")}
            type="primary"
            key="buy"
          >
            Yeni Sipariş
          </Button>,
        ]}
      />
    </div>
  );
}

export default Success;
