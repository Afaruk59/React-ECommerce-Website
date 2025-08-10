import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateCategoryPage() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const fetchCategory = async () => {
    const response = await axios.get(`${apiUrl}/api/categories/${id}`);
    setCategory(response.data);
  };

  const handleUpdate = async (values) => {
    try {
      const response = await axios.put(
        `${apiUrl}/api/categories/update/${id}`,
        values
      );
      setCategory(response.data);
      message.success("Category updated successfully");
      navigate("/admin/categories");
    } catch (error) {
      message.error("Category update failed");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <Form
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
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input placeholder={category?.name} />
      </Form.Item>

      <Form.Item
        label="Image"
        name="img"
        rules={[{ required: true, message: "Please input your image!" }]}
      >
        <Input placeholder={category?.img} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UpdateCategoryPage;
