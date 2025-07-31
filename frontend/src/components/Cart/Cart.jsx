import React from "react";
import "../../css/Cart.css";
import CartProgress from "./CartProgress";
import CartTable from "./CartTable";
import Coupon from "./Coupon";
import CartTotals from "./CartTotals";
function Cart() {
  return (
    <section className="cart-page">
      <div className="container">
        <div className="cart-page-wrapper">
          <form className="cart-form">
            <CartProgress />
            <div className="shop-table-wrapper">
              <CartTable />
              <Coupon />
            </div>
          </form>
          <div className="cart-collaterals">
            <CartTotals />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
