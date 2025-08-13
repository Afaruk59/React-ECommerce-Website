import "../../../css/Search.css";
import axios from "axios";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

function Search({ isOpen, handleClose }) {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(
        `${apiUrl}/api/products/search/${query}`
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`modal-search ${isOpen ? "show" : ""}`}
      onClick={handleModalClick}
    >
      <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">Search for products</h3>
        <p className="modal-text">
          Start typing to see products you are looking for.
        </p>
        <form className="search-form">
          <input
            type="text"
            placeholder="Search a product"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="search-results">
          <div className="search-heading">
            <h3>RESULTS FROM PRODUCT</h3>
          </div>
          <div className="results">
            {loading ? (
              <div className="loading">
                <LoadingOutlined />
              </div>
            ) : products.length > 0 ? (
              products.map((product) => (
                <a
                  key={product._id}
                  href={`/product/${product._id}`}
                  className="result-item"
                >
                  <img src={product.img[0]} className="search-thumb" alt="" />
                  <div className="search-info">
                    <h4>{product.name}</h4>
                    <span className="search-sku">SKU: {product._id}</span>
                    <span className="search-price">
                      ${product.price.current}
                    </span>
                  </div>
                </a>
              ))
            ) : (
              <div className="no-results">No results found</div>
            )}
          </div>
        </div>
        <i
          className="bi bi-x-circle"
          id="close-search"
          onClick={handleClose}
        ></i>
      </div>
    </div>
  );
}

export default Search;
