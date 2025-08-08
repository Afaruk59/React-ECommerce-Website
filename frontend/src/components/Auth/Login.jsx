import React, { useState } from "react";
import "../../css/Auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

function Login() {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/api/auth/login`, formData);
      console.log(response);
      message.success("Giriş başarılı!");
      localStorage.setItem("user", JSON.stringify(response.data));
      if (response.data.role === "admin") {
        window.location.href = "/admin";
      } else {
        navigate("/");
      }
    } catch (error) {
      message.error(error.response.data.message);
    }
  };

  return (
    <div className="account-column">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <span>
              Username or email address <span className="required">*</span>
            </span>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              Password <span className="required">*</span>
            </span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
        </div>
        <p className="remember">
          <label>
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <button className="btn btn-sm" type="submit">
            Login
          </button>
        </p>
        <a href="#" className="form-link">
          Lost your password?
        </a>
      </form>
    </div>
  );
}

export default Login;
