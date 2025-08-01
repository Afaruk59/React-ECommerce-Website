import "../../../../css/Dialog.css";

function Dialog({ isOpen, handleClose }) {
  return (
    <div
      className={`modal-dialog ${isOpen ? "show" : ""}`}
      onClick={handleClose}
    >
      <div
        className="modal-dialog-wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <button className="modal-close" onClick={handleClose}>
            <i className="bi bi-x"></i>
          </button>
          <div className="modal-image">
            <img src="img/modal-dialog.jpg" alt="" />
          </div>
          <div className="popup-wrapper">
            <div className="popup-content">
              <div className="popup-title">
                <h3>NEWSLETTER</h3>
              </div>
              <p className="popup-text">
                Sign up to our newsletter and get exclusive deals you won find
                any where else straight to your inbox!
              </p>
              <form className="popup-form">
                <input type="text" placeholder="Enter Email Address Here" />
                <button className="btn btn-primary">SUBSCRIBE</button>
                <label>
                  <input type="checkbox" />
                  <span>Don't show this popup again</span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
