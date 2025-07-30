import "../css/Slider.css";

function Slider() {
  return (
    <>
      <section className="slider">
        <div className="slider-elements">
          <div className="slider-item fade">
            <div className="slider-image">
              <img src="img/slider/slider1.jpg" className="img-fluid" alt="" />
            </div>
            <div className="container">
              <p className="slider-title">SUMMER 2022</p>
              <h2 className="slider-heading">Save up to 70%</h2>
              <a href="#" className="btn btn-lg btn-primary">
                Explore Now
              </a>
            </div>
          </div>
          <div className="slider-buttons">
            <button>
              <i className="bi bi-chevron-left"></i>
            </button>
            <button>
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <div className="slider-dots">
            <button className="slider-dot active">
              <span></span>
            </button>
            <button className="slider-dot">
              <span></span>
            </button>
            <button className="slider-dot">
              <span></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
