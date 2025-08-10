import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function AddCategoryPage() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const handleAdd = async (values) => {
    try {
      const response = await axios.post(`${apiUrl}/api/categories`, values);
      setCategory(response.data);
      message.success("Category added successfully");
      navigate("/admin/categories");
    } catch (error) {
      message.error("Category add failed");
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
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Image"
        name="img"
        rules={[{ required: true, message: "Please input your image!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
}

export default AddCategoryPage;
