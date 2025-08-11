import React, { useState, useEffect } from "react";
import { Table, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/categories`);
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/products/delete/${id}`);
      message.success("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      console.log(error);
      message.error("Product deletion failed");
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/products`);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
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
        <img src={record.img[0]} alt="avatar" style={{ width: "100px" }} />
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) => (
        <div>
          <h3>{record.price.current}</h3>
          <h3>
            {record.price.discount
              ? `%${record.price.discount}`
              : "No Discount"}
          </h3>
        </div>
      ),
    },
    {
      title: "Sizes",
      dataIndex: "size",
      key: "size",
      render: (text, record) => <div>{record.size.join(", ")}</div>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text, record) => (
        <div>
          {categories.find((category) => category._id === record.category).name}
        </div>
      ),
    },
    {
      title: "Colors",
      dataIndex: "color",
      key: "color",
      render: (text, record) => <div>{record.color.join(", ")}</div>,
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
              navigate(`/admin/products/update/${record._id}`);
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
        dataSource={products}
        columns={columns}
        rowKey={(record) => record._id}
        loading={loading}
      />
    </div>
  );
}

export default ProductsPage;
