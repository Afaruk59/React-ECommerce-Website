import React from "react";
import "../../css/ProductDetails.css";
import Breadcrumb from "../Modals/Search/Breadcrumb";
import Gallery from "./Gallery";
import ProductInfo from "./ProductInfo";
import Tabs from "./Tabs";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb id={id} />
          <div className="single-content">
            <main className="site-main">
              <Gallery id={id} />
              <ProductInfo id={id} />
            </main>
          </div>

          <Tabs id={id} />
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
