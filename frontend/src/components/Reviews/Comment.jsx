import React from "react";
import "../../css/Reviews.css";
function Comment({ review }) {
  return (
    <li className="comment-item">
      <div className="comment-avatar">
        <img src={review.user.avatar} alt="" />
      </div>
      <div className="comment-text">
        <ul className="comment-star">
          {Array.from({ length: review.rating }).map((_, index) => (
            <li key={index}>
              <i className="bi bi-star-fill"></i>
            </li>
          ))}
        </ul>
        <div className="comment-meta">
          <strong>{review.user.name}</strong>
          <span>-</span>
          <time>{review.createdAt.toLocaleDateString()}</time>
        </div>
        <div className="comment-description">
          <p>{review.text}</p>
        </div>
      </div>
    </li>
  );
}

export default Comment;
