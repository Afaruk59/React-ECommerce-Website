import React from "react";
import "../../css/Reviews.css";
import ReviewForm from "./ReviewForm";
import Comment from "./Comment";
function Reviews() {
  return (
    <div className="tab-panel-reviews">
      <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
      <div className="comments">
        <ol className="comment-list">
          <Comment />
          <Comment />
          <Comment />
        </ol>
      </div>
      {/* comment form start */}
      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <ReviewForm />
      </div>
      {/* comment form end */}
    </div>
  );
}

export default Reviews;
