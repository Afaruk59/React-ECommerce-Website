import React, { useEffect, useState } from "react";
import "../../css/Cart.css";
import axios from "axios";
import { Button, Input, message, Space } from "antd";

function Coupon({ coupons, coupon, setCoupon, handleApplyCoupon }) {
  return (
    <Space>
      <Input
        type="text"
        className="input-text"
        placeholder="Coupon code"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />
      <Button type="primary" onClick={() => handleApplyCoupon(coupon)}>
        Apply Coupon
      </Button>
    </Space>
  );
}

export default Coupon;
