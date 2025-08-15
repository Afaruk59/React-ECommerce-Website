import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message, Form, Input, Button } from "antd";

function Register() {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/register`, values);
      console.log("Kayıt başarılı:", response.data);
      message.success("Kayıt başarıyla tamamlandı!");
      localStorage.setItem("user", JSON.stringify(response.data));
      window.location.href = "/";
    } catch (error) {
      console.error("Kayıt hatası:", error);
      if (error.response) {
        message.error(error.response.data.message);
      } else {
        message.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    }
  };

  return (
    <div className="account-column">
      <h2>Register</h2>
      <Form onFinish={handleSubmit} layout="vertical" name="register">
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input name="username" placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input name="email" placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password name="password" placeholder="Password" />
        </Form.Item>
        <div className="privacy-policy-text remember">
          <Button size="large" htmlType="submit">
            Register
          </Button>
          <p className="privacy-policy-text">
            By registering you agree to our{" "}
            <a href="#">Terms & Conditions and Privacy & Cookies Policy.</a>
          </p>
        </div>
      </Form>
    </div>
  );
}

export default Register;
