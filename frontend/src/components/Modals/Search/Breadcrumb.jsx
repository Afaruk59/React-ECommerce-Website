import "../../../css/Breadcrumb.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Breadcrumb({ product }) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/api/categories/${product.category}`
        );
        setCategory(response.data.name);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory();
  }, [product?.category]);

  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              Home
            </a>
          </li>
          <li>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/category/${product?.category}`)}
            >
              {category ? category : "Loading..."}
            </a>
          </li>
          <li>{product?.name}</li>
        </ul>
      </nav>
    </div>
  );
}

export default Breadcrumb;
