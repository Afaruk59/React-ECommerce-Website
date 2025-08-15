import React from "react";
import "../../css/Blogs.css";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

function BlogItem({ blog }) {
  const navigate = useNavigate();

  return (
    <li className="blog-item">
      <Card
        onClick={() => {
          navigate(`/blog/${blog._id}`);
        }}
        hoverable
        className="blog-card"
        cover={<img src={blog.img} alt="" />}
      >
        <div className="blog-info-top">
          <span>{blog.createdAt.split("T")[0]}</span> <span>0 Comments</span>
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
