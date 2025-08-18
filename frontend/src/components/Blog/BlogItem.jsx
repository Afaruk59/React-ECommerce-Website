import React from "react";
import "../../css/Blogs.css";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

function BlogItem({ blog }) {
  const navigate = useNavigate();

  return (
    <li className="blog-item">
      <Card
        style={{
          minHeight: "450px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
        onClick={() => {
          navigate(`/blog/${blog._id}`);
        }}
        hoverable
        className="blog-card"
        cover={
          <div style={{ height: "200px", width: "100%", overflow: "hidden" }}>
            <img style={{ width: "100%" }} src={blog.img} alt="" />
          </div>
        }
      >
        <div className="blog-info-top">
          <span>{blog.createdAt.split("T")[0]}</span>
          {" | "}
          <span>{blog.reviews.length} Comments</span>
        </div>
        <div className="blog-info-center">
          <a>{blog.title}</a>
        </div>
        <div className="blog-info-bottom">
          <a>Read More</a>
        </div>
      </Card>
    </li>
  );
}

export default BlogItem;
