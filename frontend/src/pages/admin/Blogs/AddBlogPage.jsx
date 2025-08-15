import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button, message } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AddBlogPage() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const quillRef = useRef(null);

  const handleAdd = async (values) => {
    try {
      const response = await axios.post(`${apiUrl}/api/blogs`, {
        ...values,
        author: user.username,
      });
      message.success("Blog added successfully");
      navigate("/admin/blogs");
    } catch (error) {
      message.error("Blog add failed");
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
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your title!" }]}
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

      <Form.Item
        label="Content"
        name="content"
        rules={[{ required: true, message: "Please input your content!" }]}
      >
        <ReactQuill
          ref={quillRef}
          theme="snow"
          placeholder="Enter blog content"
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

export default AddBlogPage;
