import React from "react";
import "../../css/ProductDetails.css";
import Breadcrumb from "./Breadcrumb";
import Gallery from "./Gallery";
import ProductInfo from "./ProductInfo";
import Tabs from "./Tabs";

function ProductDetails() {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb />
          <div className="single-content">
            <main className="site-main">
              <Gallery />
              <ProductInfo />
            </main>
          </div>

          <Tabs />
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
