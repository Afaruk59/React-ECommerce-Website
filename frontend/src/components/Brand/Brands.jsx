import React from "react";
import "../../css/Brands.css";
import BrandItem from "./BrandItem";

function Brands() {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brand-list">
          <BrandItem src="img/brands/brand1.png" />
          <BrandItem src="img/brands/brand2.png" />
          <BrandItem src="img/brands/brand3.png" />
          <BrandItem src="img/brands/brand4.png" />
          <BrandItem src="img/brands/brand5.png" />
          <BrandItem src="img/brands/brand6.png" />
        </ul>
      </div>
    </section>
  );
}

export default Brands;
