import React, { useEffect, useState } from "react";
import "../../css/Cart.css";
import CartProgress from "./CartProgress";
import CartTable from "./CartTable";
import Coupon from "./Coupon";
import CartTotals from "./CartTotals";
import axios from "axios";
import { Card, message } from "antd";

function Cart() {
  const [coupons, setCoupons] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    getCoupons();
  }, []);

  const getCoupons = async () => {
    const response = await axios.get(`${apiUrl}/api/coupons`);
    setCoupons(response.data);
  };

  const handleApplyCoupon = async (coupon) => {
    if (!coupon.trim()) {
      message.error("Please enter a coupon code");
      return;
    }

    const validCoupon = coupons.find((cp) => cp.code === coupon);
    if (validCoupon) {
      message.success("Coupon applied successfully");
      setCoupon("");
      setDiscount(validCoupon.discount);
    } else {
      message.error("Invalid coupon code");
    }
  };

  return (
    <section className="cart-page">
      <div className="container">
        <div className="cart-page-wrapper">
          <form className="cart-form">
            <CartProgress />
            <div className="shop-table-wrapper">
              <CartTable />
              <Coupon
                coupons={coupons}
                coupon={coupon}
                setCoupon={setCoupon}
                handleApplyCoupon={handleApplyCoupon}
              />
            </div>
          </form>
          <Card hoverable className="cart-collaterals" title="Cart totals">
            <CartTotals discount={discount} />
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Cart;
