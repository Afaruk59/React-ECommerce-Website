import React, { useState, useEffect } from "react";
import "../../css/Categories.css";
import CategoryItem from "./CategoryItem";
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get(`${apiUrl}/api/categories`);
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return (
    <section className="categories">
      <div className="container">
        <div className="section-title">
          <h2>All Categories</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <ul
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {categories.map((category) => (
            <CategoryItem key={category._id} category={category} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Categories;
