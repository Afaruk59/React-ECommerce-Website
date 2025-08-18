import React, { useEffect, useState } from "react";
import "../../css/Blogs.css";
import BlogItem from "./BlogItem";
import axios from "axios";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Blogs({ blogCount }) {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(`${apiUrl}/api/blogs`);
      setBlogs(response.data);
    };
    fetchBlogs();
  }, []);

  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <section className="blogs blog-page">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="section-title">
            <h2>From Our Blog</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          {blogCount ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button type="" size="large" onClick={() => navigate("/blog")}>
                View All Blogs
              </Button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <br />
        <ul className="blog-list">
          {blogCount
            ? blogs
                .slice(0, 3)
                .map((blog) => <BlogItem key={blog._id} blog={blog} />)
            : blogs.map((blog) => <BlogItem key={blog._id} blog={blog} />)}
        </ul>
      </div>
    </section>
  );
}

export default Blogs;
