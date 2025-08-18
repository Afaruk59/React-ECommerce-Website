import React, { useState, useEffect } from "react";
import { Table, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BlogListPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/blogs/delete/${id}`);
      message.success("Blog deleted successfully");
      fetchBlogs();
    } catch (error) {
      console.log(error);
      message.error("Blog deletion failed");
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/blogs`);
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <div>
          <h3>{record.title}</h3>
        </div>
      ),
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      render: (text, record) => (
        <div>
          <b>{record.author}</b>
        </div>
      ),
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (text, record) => (
        <img src={record.img} alt="avatar" style={{ width: "100px" }} />
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button type="error" danger onClick={() => handleDelete(record._id)}>
            Delete
          </Button>
          <Button
            type="primary"
            onClick={() => {
              navigate(`/admin/blogs/update/${record._id}`);
            }}
          >
            Update
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={blogs}
        columns={columns}
        rowKey={(record) => record._id}
        loading={loading}
      />
    </div>
  );
}

export default BlogListPage;
