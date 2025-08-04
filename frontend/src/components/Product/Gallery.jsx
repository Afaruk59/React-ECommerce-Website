import React, { useState, useEffect } from "react";
import "../../css/Gallery.css";
import products from "../../data.json";

function Gallery({ id }) {
  const [productData, setProductData] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setProductData(products.find((product) => product.id === parseInt(id)));
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveImage(
        activeImage + 1 > productData?.img.thumbs.length - 1
          ? 0
          : activeImage + 1
      );
    }, 3000);
    return () => clearTimeout(timer);
  }, [activeImage]);

  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img
          src={
            productData?.img.thumbs[activeImage]
              ? `/${productData.img.thumbs[activeImage]}`
              : ""
          }
          id="single-image"
          alt=""
        />
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
            {productData?.img.thumbs.map((thumb, index) => (
              <li
                key={`${id}-${index}`}
                className={`glide__slide ${
                  activeImage === index ? "glide__slide__active" : ""
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  width={100}
                  src={`/${productData?.img.thumbs[index]}`}
                  alt=""
                />
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
                activeImage + 1 > productData?.img.thumbs.length - 1
                  ? productData?.img.thumbs.length - 1
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
