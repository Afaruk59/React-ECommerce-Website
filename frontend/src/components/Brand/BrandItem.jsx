import React from "react";
import "../../css/Brands.css";

function BrandItem({ src }) {
  return (
    <li className="brand-item">
      <a href="#">
        <img src={src} alt="" />
      </a>
    </li>
  );
}

export default BrandItem;
