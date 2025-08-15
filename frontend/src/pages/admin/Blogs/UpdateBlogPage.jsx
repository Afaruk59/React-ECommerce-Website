import React, { useState, useEffect, useRef } from "react";
import { Form, Input, Button, message } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function UpdateBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const quillRef = useRef(null);

  const fetchBlog = async () => {
    const response = await axios.get(`${apiUrl}/api/blogs/${id}`);
    setBlog(response.data);
  };

  const handleUpdate = async (values) => {
    try {
      const response = await axios.put(
        `${apiUrl}/api/blogs/update/${id}`,
        values
      );
      setBlog(response.data);
      message.success("Blog updated successfully");
      navigate("/admin/blogs");
    } catch (error) {
      message.error("Blog update failed");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  useEffect(() => {
    if (blog) {
      form.setFieldsValue({
        title: blog.title,
        img: blog.img,
        content: blog.content,
      });
    }
  }, [blog, form]);

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
          Update
        </Button>
      </Form.Item>
    </Form>
  );
}

export default UpdateBlogPage;
