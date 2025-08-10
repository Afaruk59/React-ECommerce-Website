import React, { useState, useEffect } from "react";
import { Table, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/categories/delete/${id}`);
      message.success("Category deleted successfully");
      fetchCategories();
    } catch (error) {
      console.log(error);
      message.error("Category deletion failed");
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/categories`);
      setCategories(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div>
          <h3>{record.name}</h3>
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
              navigate(`/admin/categories/update/${record._id}`);
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
        dataSource={categories}
        columns={columns}
        rowKey={(record) => record._id}
        loading={loading}
      />
    </div>
  );
}

export default CategoryPage;
