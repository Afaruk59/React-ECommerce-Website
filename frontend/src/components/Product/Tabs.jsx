import React, { useState } from "react";
import "../../css/Tabs.css";
import Reviews from "../Reviews/Reviews";

function Tabs({ product }) {
  const [activeTab, setActiveTab] = useState("desc");
  if (!product) {
    return (
      <div className="product-info">
        <div className="loading">Ürün bilgileri yükleniyor...</div>
      </div>
    );
  }
  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a
            style={{ cursor: "pointer" }}
            className={`tab-button ${activeTab === "desc" ? "active" : ""}`}
            onClick={() => setActiveTab("desc")}
          >
            Description
          </a>
        </li>
        <li>
          <a
            style={{ cursor: "pointer" }}
            className={`tab-button ${activeTab === "info" ? "active" : ""}`}
            onClick={() => setActiveTab("info")}
          >
            Additional information
          </a>
        </li>
        <li>
          <a
            style={{ cursor: "pointer" }}
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div
          className={`tab-panel-descriptions content ${
            activeTab === "desc" ? "active" : ""
          }`}
          id="desc"
        >
          <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
        </div>
        <div
          className={`tab-panel-information content ${
            activeTab === "info" ? "active" : ""
          }`}
          id="info"
        >
          <h3>Additional information</h3>
          <table>
            <tbody>
              <tr>
                <th>Color</th>
                <td>
                  <div>
                    {product.color.map((color, index) => (
                      <span key={color}>
                        {color}
                        {index < product.color.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
              <tr>
                <th>Size</th>
                <td>
                  <div>
                    {product.size.map((size, index) => (
                      <span key={size}>
                        {size}
                        {index < product.size.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Reviews
          activeTab={activeTab === "reviews" ? "content active" : "content"}
          product={product}
        />
      </div>
    </div>
  );
}

export default Tabs;
