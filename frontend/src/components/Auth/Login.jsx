import React, { useState } from "react";
import "../../css/Auth.css";
import axios from "axios";
import { message, Input, Checkbox, Form, Button } from "antd";

function Login() {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/login`, values);
      console.log(response);
      message.success("Giriş başarılı!");
      localStorage.setItem("user", JSON.stringify(response.data));
      if (response.data.role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      message.error(error.response.data.message);
    }
  };

  return (
    <div className="account-column">
      <h2>Login</h2>
      <Form onFinish={handleSubmit} layout="vertical" name="login">
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username or email address!",
            },
          ]}
        >
          <Input name="email" placeholder="Username or email address" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password name="password" placeholder="Password" />
        </Form.Item>
        <p className="remember">
          <label>
            <Checkbox type="checkbox" />
            <span>Remember me</span>
          </label>
          <Button htmlType="submit">Login</Button>
        </p>
        <a href="#" className="form-link">
          Lost your password?
        </a>
      </Form>
    </div>
  );
}

export default Login;
