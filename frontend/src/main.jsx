import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <MainLayout>
      <App />
    </MainLayout>
  </>
);
