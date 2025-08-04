import "../../css/Slider.css";
import { useState, useEffect } from "react";
import SliderItem from "./SliderItem";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(2);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <>
      <section className="slider">
        <div className="slider-elements">
          {currentSlide === 0 && <SliderItem index={0} />}
          {currentSlide === 1 && <SliderItem index={1} />}
          {currentSlide === 2 && <SliderItem index={2} />}
          <div className="slider-buttons">
            <button onClick={handlePrev}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <button onClick={handleNext}>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <div className="slider-dots">
            <button
              className={`slider-dot ${currentSlide === 0 ? "active" : ""}`}
              onClick={() => setCurrentSlide(0)}
            >
              <span></span>
            </button>
            <button
              className={`slider-dot ${currentSlide === 1 ? "active" : ""}`}
              onClick={() => setCurrentSlide(1)}
            >
              <span></span>
            </button>
            <button
              className={`slider-dot ${currentSlide === 2 ? "active" : ""}`}
              onClick={() => setCurrentSlide(2)}
            >
              <span></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
