import React from "react";
import "../../../css/Breadcrumb.css";
import products from "../../../data.json";

function Breadcrumb({ id }) {
  const product = products.find((product) => product.id === parseInt(id));
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Man</a>
          </li>
          <li>
            <a href="#">Pants</a>
          </li>
          <li>{product?.name || "Ürün Bulunamadı"}</li>
        </ul>
      </nav>
    </div>
  );
}

export default Breadcrumb;
