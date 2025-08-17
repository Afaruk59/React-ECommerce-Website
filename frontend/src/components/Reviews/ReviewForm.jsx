import React, { useState } from "react";
import "../../css/Reviews.css";
import axios from "axios";
import { message } from "antd";

function ReviewForm({ product, type = "product" }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [cookies, setCookies] = useState(false);
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleRating = (e, rating, id) => {
    e.preventDefault();
    setRating(rating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      ...product,
      reviews: [
        ...product.reviews,
        {
          text: comment,
          rating: rating,
          user: user?._id,
        },
      ],
    };
    if (user) {
      try {
        const endpoint =
          type === "blog"
            ? `${apiUrl}/api/blogs/update/${product._id}`
            : `${apiUrl}/api/products/update/${product._id}`;

        const response = await axios.put(endpoint, reviewData);
        message.success("Review added successfully");
        console.log(response);
      } catch (error) {
        message.error("Review failed to add");
        console.log(error);
      }
    } else {
      message.error("Please login to add a review");
    }
    setRating(0);
    setComment("");
    setCookies(false);
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <p className="comment-notes">
        Your email address will not be published. Required fields are marked
        <span className="required">*</span>
      </p>
      <div className="comment-form-rating">
        <label>
          Your rating
          <span className="required">*</span>
        </label>
        <div className="stars">
          <a
            className={`star ${rating >= 1 ? "active" : ""}`}
            onClick={(e) => handleRating(e, 1)}
          >
            <i className="bi bi-star-fill"></i>
          </a>
          <a
            className={`star ${rating >= 2 ? "active" : ""}`}
            onClick={(e) => handleRating(e, 2)}
          >
            <i className="bi bi-star-fill"></i>
          </a>
          <a
            className={`star ${rating >= 3 ? "active" : ""}`}
            onClick={(e) => handleRating(e, 3)}
          >
            <i className="bi bi-star-fill"></i>
          </a>
          <a
            className={`star ${rating >= 4 ? "active" : ""}`}
            onClick={(e) => handleRating(e, 4)}
          >
            <i className="bi bi-star-fill"></i>
          </a>
          <a
            className={`star ${rating >= 5 ? "active" : ""}`}
            onClick={(e) => handleRating(e, 5)}
          >
            <i className="bi bi-star-fill"></i>
          </a>
        </div>
      </div>
      <div className="comment-form-comment form-comment">
        <label htmlFor="comment">
          Your review
          <span className="required">*</span>
        </label>
        <textarea
          id="comment"
          cols="50"
          rows="10"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div className="comment-form-cookies">
        <input
          id="cookies"
          type="checkbox"
          checked={cookies}
          onChange={(e) => setCookies(e.target.checked)}
        />
        <label htmlFor="cookies">
          Save my name, email, and website in this browser for the next time I
          comment.
          <span className="required">*</span>
        </label>
      </div>
      <div className="form-submit">
        <input type="submit" className="btn submit" />
      </div>
    </form>
  );
}

export default ReviewForm;
