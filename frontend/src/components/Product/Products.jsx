import React, { useEffect, useState } from "react";
import "../../css/Products.css";
import ProductItem from "./ProductItem";
import products from "../../data.json";
import Slider from "react-slick";

function Products() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(products);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="products">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          <div className="product-wrapper product-carousel">
            <div className="glide__track">
              <Slider {...settings}>
                {productsData.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
