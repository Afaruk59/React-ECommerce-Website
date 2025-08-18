import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductItem from "../components/Product/ProductItem";
import { Space } from "antd";

function CategoryFilterPage() {
  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [productsData, setProductsData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${apiUrl}/api/products`);
      setProductsData(response.data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await axios.get(`${apiUrl}/api/categories/${id}`);
      setCategory(response.data);
    };
    fetchCategory();
  }, []);

  if (!productsData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="products">
      <div className="container">
        <br />
        <div className="section-title">
          <h2>{category.name}</h2>
        </div>
        <Space direction="horizontal" wrap style={{ justifyContent: "center" }}>
          {productsData.map((product) =>
            product.category === id ? (
              <div style={{ width: "280px" }}>
                <ProductItem key={product._id} product={product} />
              </div>
            ) : null
          )}
        </Space>
      </div>
    </section>
  );
}

export default CategoryFilterPage;
