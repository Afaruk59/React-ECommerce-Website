import "../../../css/Breadcrumb.css";

function Breadcrumb({ product }) {
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>{product?.name}</li>
        </ul>
      </nav>
    </div>
  );
}

export default Breadcrumb;
