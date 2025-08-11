import React, { useState, useEffect } from "react";
import "../../css/ProductDetails.css";
import Breadcrumb from "../Modals/Search/Breadcrumb";
import Gallery from "./Gallery";
import ProductInfo from "./ProductInfo";
import Tabs from "./Tabs";
import axios from "axios";

function ProductDetails({ id }) {
  const [product, setProduct] = useState();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`${apiUrl}/api/products/${id}`);
      setProduct(response.data);
    };
    fetchProduct();
  }, []);

  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb product={product} />
          <div className="single-content">
            <main className="site-main">
              <Gallery product={product} />
              <ProductInfo product={product} />
            </main>
          </div>

          <Tabs product={product} />
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
