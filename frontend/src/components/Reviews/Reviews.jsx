import React from "react";
import "../../css/Reviews.css";
import ReviewForm from "./ReviewForm";
import Comment from "./Comment";
function Reviews({ activeTab, product, type = "product" }) {
  return (
    <div className={`tab-panel-reviews ${activeTab}`}>
      <h3>
        {product.reviews.length} reviews for{" "}
        {type === "blog" ? product.title : product.name}
      </h3>
      <div className="comments">
        <ol className="comment-list">
          {product.reviews.map((review) => (
            <Comment key={review._id} review={review} />
          ))}
        </ol>
      </div>
      {/* comment form start */}
      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <ReviewForm product={product} type={type} />
      </div>
      {/* comment form end */}
    </div>
  );
}

export default Reviews;
