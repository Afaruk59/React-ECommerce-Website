import React, { useState, useEffect } from "react";
import ProductDetails from "../components/Product/ProductDetails";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetailsPage() {
  const { id } = useParams();
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
    <>
      <ProductDetails product={product} />
    </>
  );
}

export default ProductDetailsPage;
