import React, { useState, useEffect } from "react";
import { Form, Input, Button, message, InputNumber } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateCoupon() {
  const { id } = useParams();
  const [coupon, setCoupon] = useState(null);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const fetchCoupon = async () => {
    const response = await axios.get(`${apiUrl}/api/coupons/${id}`);
    setCoupon(response.data);
  };

  const handleUpdate = async (values) => {
    try {
      const response = await axios.put(
        `${apiUrl}/api/coupons/update/${id}`,
        values
      );
      setCoupon(response.data);
      message.success("Coupon updated successfully");
      navigate("/admin/coupons");
    } catch (error) {
      message.error("Coupon update failed");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCoupon();
  }, []);

  useEffect(() => {
    if (coupon) {
      form.setFieldsValue({
        code: coupon.code,
        discount: coupon.discount,
      });
    }
  }, [coupon, form]);

  return (
    <Form
      form={form}
      layout="vertical"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
      onFinish={handleUpdate}
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
          Update
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UpdateCoupon;
