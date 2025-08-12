import React from "react";
import "../../css/ProductDetails.css";
import Breadcrumb from "../Modals/Search/Breadcrumb";
import Gallery from "./Gallery";
import ProductInfo from "./ProductInfo";
import Tabs from "./Tabs";

function ProductDetails({ product }) {
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
