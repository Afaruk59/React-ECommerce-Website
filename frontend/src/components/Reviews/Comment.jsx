import React from "react";
import "../../css/Reviews.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Comment({ review }) {
  const [user, setUser] = useState();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const getUserData = async () => {
    const response = await axios.get(`${apiUrl}/api/auth/${review.user}`);
    setUser(response.data);
  };

  useEffect(() => {
    console.log(review);
    getUserData();
  }, []);

  if (!user) {
    return (
      <div className="product-info">
        <div className="loading">Kullanıcı bilgileri yükleniyor...</div>
      </div>
    );
  }

  return (
    <li className="comment-item">
      <div className="comment-avatar">
        <img width={50} height={50} src={user.avatar} alt="" />
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
          <strong>{user.username}</strong>
          <span> </span>
          <time>{new Date(review.updatedAt).toLocaleString()}</time>
        </div>
        <div className="comment-description">
          <p>{review.text}</p>
        </div>
      </div>
    </li>
  );
}

export default Comment;
