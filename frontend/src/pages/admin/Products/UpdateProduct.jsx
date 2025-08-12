import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button, message, Select, InputNumber } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function UpdateProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const quillRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/categories`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProduct = async () => {
    const response = await axios.get(`${apiUrl}/api/products/${id}`);
    setProduct(response.data);
  };

  const handleUpdate = async (values) => {
    try {
      // Convert string inputs to arrays
      const formattedValues = {
        ...values,
        img: values.img
          .split("\n")
          .map((item) => item.trim())
          .filter((item) => item),
        color: values.color
          .split("\n")
          .map((item) => item.trim())
          .filter((item) => item),
        size: values.size
          .split("\n")
          .map((item) => item.trim())
          .filter((item) => item),
        price: {
          current: values.currentPrice,
          discount: values.discountPrice || 0,
        },
      };

      // Remove the separate price fields
      delete formattedValues.currentPrice;
      delete formattedValues.discountPrice;

      const response = await axios.put(
        `${apiUrl}/api/products/update/${id}`,
        formattedValues
      );
      setProduct(response.data);
      message.success("Product updated successfully");
      navigate("/admin/products/");
    } catch (error) {
      message.error("Product update failed");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        name: product.name,
        img: product.img?.join("\n") || "",
        color: product.color?.join("\n") || "",
        size: product.size?.join("\n") || "",
        currentPrice: product.price?.current || 0,
        discountPrice: product.price?.discount || 0,
        description: product.description || "",
        category: product.category || "",
      });
    }
  }, [product, form]);

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
          Update
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UpdateProductPage;
