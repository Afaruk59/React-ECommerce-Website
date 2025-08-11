import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button, message, Select, InputNumber } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AddProductPage() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const quillRef = useRef(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/categories`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = async (values) => {
    const { img, color, size, currentPrice, discountPrice, ...rest } = values;
    const imgLinks = img.split("\n").map((img) => img.trim());
    const colors = color.split("\n").map((color) => color.trim());
    const sizes = size.split("\n").map((size) => size.trim());

    const productData = {
      ...rest,
      img: imgLinks,
      color: colors,
      size: sizes,
      price: {
        current: currentPrice,
        discount: discountPrice || 0,
      },
    };
    try {
      const response = await axios.post(`${apiUrl}/api/products`, productData);
      setProduct(response.data);
      message.success("Product added successfully");
      navigate("/admin/products/");
    } catch (error) {
      message.error("Product add failed");
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
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input product name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Image Links"
        name="img"
        rules={[{ required: true, message: "Please input your image links!" }]}
      >
        <Input.TextArea
          placeholder="Enter image links separated by commas"
          autoSize={{ minRows: 4, maxRows: 4 }}
        />
      </Form.Item>

      <Form.Item
        label="Colors"
        name="color"
        rules={[{ required: true, message: "Please input your colors!" }]}
      >
        <Input.TextArea
          placeholder="Enter colors separated by commas"
          autoSize={{ minRows: 4, maxRows: 4 }}
        />
      </Form.Item>

      <Form.Item
        label="Sizes"
        name="size"
        rules={[{ required: true, message: "Please input your sizes!" }]}
      >
        <Input.TextArea
          placeholder="Enter sizes separated by commas"
          autoSize={{ minRows: 4, maxRows: 4 }}
        />
      </Form.Item>

      <Form.Item
        label="Current Price"
        name="currentPrice"
        rules={[{ required: true, message: "Please input current price!" }]}
      >
        <InputNumber placeholder="Current Price" style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Discount Price" name="discountPrice">
        <InputNumber placeholder="Discount Price" style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please input product description!" },
        ]}
      >
        <ReactQuill
          ref={quillRef}
          theme="snow"
          placeholder="Enter product description"
        />
      </Form.Item>

      <Form.Item
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please input product category!" }]}
      >
        <Select
          options={categories.map((category) => ({
            label: category.name,
            value: category._id,
          }))}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddProductPage;
