import { Row, Col, Card, Statistic, message } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const DashboardPage = () => {
  const [paymentData, setPaymentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [income, setIncome] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/payment/orders`
      );
      setPaymentData(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      message.error("Siparişler yüklenirken hata oluştu");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const customerData = paymentData
    .sort((a, b) => new Date(a.created) - new Date(b.created))
    .reduce((acc, order) => {
      const date = new Date(order.created).toLocaleDateString("tr-TR");
      const existingDate = acc.find((item) => item.name === date);

      if (existingDate) {
        existingDate.musteriSayisi++;
      } else {
        acc.push({
          name: date,
          musteriSayisi: 1,
        });
      }

      return acc;
    }, []);

  const incomeChartData = paymentData
    .sort((a, b) => new Date(a.created) - new Date(b.created))
    .reduce((acc, order, index) => {
      const previousTotal = index > 0 ? acc[index - 1].gelir : 0;
      const currentAmount = parseFloat(order.amount);

      acc.push({
        name: new Date(order.created).toLocaleDateString("tr-TR"),
        gelir: previousTotal + currentAmount,
      });

      return acc;
    }, []);

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Card hoverable>
            <Statistic
              title="Toplam Müşteri Sayısı"
              value={paymentData.length}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card hoverable>
            <Statistic
              title="Toplam Gelir"
              value={paymentData
                .reduce((acc, order) => acc + order.amount, 0)
                .toFixed(2)}
              prefix="$"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Card hoverable style={{ marginTop: "20px" }}>
            <h2>Toplam Gelir Grafiği</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={incomeChartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, "Gelir"]} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="gelir"
                  stroke="#8884d8"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                  name="Gelir"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col span={12}>
          <Card hoverable style={{ marginTop: "20px" }}>
            <h2>Son Aydaki Müşteri Artışı</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={customerData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [value, "Müşteri Sayısı"]} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="musteriSayisi"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                  name="Müşteri Sayısı"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
