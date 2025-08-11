import React from "react";
import ProductDetails from "../components/Product/ProductDetails";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { id } = useParams();
  return (
    <>
      <ProductDetails id={id} />
    </>
  );
}

export default ProductDetailsPage;
