import React, { useState, useEffect } from "react";
import { Table, Button, message } from "antd";
import axios from "axios";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/payment/orders`
      );
      setOrders(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      message.error("Siparişler yüklenirken hata oluştu");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const columns = [
    {
      title: "Sipariş ID",
      dataIndex: "id",
      key: "id",
      render: (text) => text.substring(0, 20) + "...", // ID'yi kısalt
    },
    {
      title: "Tutar",
      dataIndex: "amount",
      key: "amount",
      render: (amount, record) =>
        `$${amount.toFixed(2)} ${record.currency.toUpperCase()}`,
    },
    {
      title: "Durum",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const statusMap = {
          succeeded: { text: "Başarılı", color: "green" },
          pending: { text: "Bekliyor", color: "orange" },
          failed: { text: "Başarısız", color: "red" },
          canceled: { text: "İptal", color: "gray" },
        };
        const statusInfo = statusMap[status] || { text: status, color: "blue" };
        return (
          <span style={{ color: statusInfo.color }}>{statusInfo.text}</span>
        );
      },
    },
    {
      title: "Tarih",
      dataIndex: "created",
      key: "created",
      render: (date) => new Date(date).toLocaleString("tr-TR"),
    },
    {
      title: "Açıklama",
      dataIndex: "description",
      key: "description",
    },
  ];

  return (
    <div>
      <Table
        dataSource={orders}
        columns={columns}
        rowKey={(record) => record.id}
        loading={loading}
      />
    </div>
  );
}

export default OrdersPage;
