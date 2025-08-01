import React from "react";
import "../../css/Gallery.css";

function Gallery() {
  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src="img/products/product2/1.png" id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track">
          <ol className="gallery-thumbs glide__slides"></ol>
        </div>
        <div className="glide__arrows">
          <button className="glide__arrow glide__arrow--left">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="glide__arrow glide__arrow--right">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
