import React from "react";
import "../../css/CategoryItem.css";
function CategoryItem({ category }) {
  return (
    <li className="category-item">
      <a href="#">
        <img
          src={category.img}
          alt=""
          className="category-image"
          style={{ width: "200px" }}
        />
        <p className="category-title">{category.name}</p>
      </a>
    </li>
  );
}

export default CategoryItem;
