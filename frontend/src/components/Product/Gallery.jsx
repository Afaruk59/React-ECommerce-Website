import React, { useState, useEffect } from "react";
import "../../css/Gallery.css";

function Gallery({ product }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveImage(
        activeImage + 1 > product?.img.length - 1 ? 0 : activeImage + 1
      );
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeImage]);

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={`${product?.img[activeImage]}`} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track">
          <ol
            className="gallery-thumbs glide__slides"
            style={{
              display: "flex",
              flexDirection: "row",

              overflow: "hidden",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {product?.img.map((thumb, index) => (
              <li
                key={`${product._id}-${index}`}
                className={`glide__slide ${
                  activeImage === index ? "glide__slide__active" : ""
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img width={100} src={`${product?.img[index]}`} alt="" />
              </li>
            ))}
          </ol>
        </div>
        <div className="glide__arrows">
          <button
            className="glide__arrow glide__arrow--left"
            onClick={() =>
              setActiveImage(activeImage - 1 < 0 ? 0 : activeImage - 1)
            }
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            onClick={() =>
              setActiveImage(
                activeImage + 1 > product?.img.length - 1
                  ? product?.img.length - 1
                  : activeImage + 1
              )
            }
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
