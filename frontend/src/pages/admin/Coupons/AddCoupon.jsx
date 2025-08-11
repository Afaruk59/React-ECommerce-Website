import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddCoupon() {
  const [coupon, setCoupon] = useState(null);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const handleAdd = async (values) => {
    try {
      const response = await axios.post(`${apiUrl}/api/coupons`, values);
      setCoupon(response.data);
      message.success("Coupon added successfully");
      navigate("/admin/coupons");
    } catch (error) {
      message.error("Coupon add failed");
      console.log(error);
    }
  };

  return (
    <Form
      layout="vertical"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
      onFinish={handleAdd}
    >
      <Form.Item
        label="Code"
        name="code"
        rules={[{ required: true, message: "Please input your code!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Discount"
        name="discount"
        rules={[{ required: true, message: "Please input your discount!" }]}
      >
        <InputNumber min={0} max={100} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddCoupon;
