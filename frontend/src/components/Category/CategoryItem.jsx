import React from "react";
import "../../css/CategoryItem.css";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

function CategoryItem({ category }) {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      style={{ height: "300px", marginTop: "50px" }}
      onClick={() => {
        navigate(`/category/${category._id}`);
      }}
    >
      <img
        src={category.img}
        alt=""
        className="category-image"
        width="100%"
        height="200px"
      />
      <p className="category-title">{category.name}</p>
    </Card>
  );
}

export default CategoryItem;
