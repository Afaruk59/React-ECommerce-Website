import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from "./context/CartProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import ScrolltoTop from "./components/ScrolltoTop.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <ScrolltoTop />
      <CartProvider>
        <Layout>
          <App />
        </Layout>
      </CartProvider>
    </BrowserRouter>
  </>
);
