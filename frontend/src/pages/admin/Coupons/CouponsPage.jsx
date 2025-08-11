import React, { useState, useEffect } from "react";
import { Table, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CouponsPage() {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/coupons/delete/${id}`);
      message.success("Coupon deleted successfully");
      fetchCoupons();
    } catch (error) {
      console.log(error);
      message.error("Coupon deletion failed");
    }
  };

  const fetchCoupons = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/coupons`);
      setCoupons(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      render: (text, record) => (
        <div>
          <h3>{record.code}</h3>
        </div>
      ),
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
      render: (text, record) => <div>{record.discount}%</div>,
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
              navigate(`/admin/coupons/update/${record._id}`);
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
        dataSource={coupons}
        columns={columns}
        rowKey={(record) => record._id}
        loading={loading}
      />
    </div>
  );
}

export default CouponsPage;
