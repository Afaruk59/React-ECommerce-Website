import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../css/single-blog.css";
import Reviews from "../components/Reviews/Reviews";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BlogDetailsPage() {
  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await axios.get(`${apiUrl}/api/blogs/${id}`);
      setBlog(response.data);
      console.log(response.data);
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="single-blog">
        <div className="container">
          <article>
            <figure>
              <a href="#">
                <img src={blog.img} alt="" />
              </a>
            </figure>
            <div className="blog-wrapper">
              <div className="blog-meta">
                <div className="blog-date">
                  <a href="#">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </a>
                </div>
              </div>
              <h1 className="blog-title">{blog.title}</h1>
              <div className="blog-content">
                <p dangerouslySetInnerHTML={{ __html: blog.content }} />
                <h3>Author: {blog.author}</h3>
              </div>
            </div>
          </article>
          <Reviews activeTab="content" product={blog} type="blog" />
        </div>
      </section>
    </>
  );
}

export default BlogDetailsPage;
