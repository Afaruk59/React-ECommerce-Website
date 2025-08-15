import React, { useEffect, useState } from "react";
import "../../css/Blogs.css";
import BlogItem from "./BlogItem";
import axios from "axios";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(`${apiUrl}/api/blogs`);
      setBlogs(response.data);
    };
    fetchBlogs();
  }, []);

  return (
    <section className="blogs blog-page">
      <div className="container">
        <div className="section-title">
          <h2>From Our Blog</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <br />
        <ul className="blog-list">
          {blogs.map((blog) => (
            <BlogItem key={blog._id} blog={blog} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Blogs;
