import "./App.css";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import UserPage from "./pages/admin/UserPage";
import CategoryPage from "./pages/admin/Categories/CategoryPage";
import UpdateCategoryPage from "./pages/admin/Categories/UpdateCategoryPage";
import AddCategoryPage from "./pages/admin/Categories/AddCategoryPage";
import AddProductPage from "./pages/admin/Products/AddProductPage";
import ProductsPage from "./pages/admin/Products/ProductsPage";
import UpdateProductPage from "./pages/admin/Products/UpdateProduct";
import CouponsPage from "./pages/admin/Coupons/CouponsPage";
import AddCoupon from "./pages/admin/Coupons/AddCoupon";
import UpdateCoupon from "./pages/admin/Coupons/UpdateCoupon";
import Success from "./pages/Success";
import OrdersPage from "./pages/admin/OrderPage";
import DashboardPage from "./pages/admin/DashboardPage";
import { Routes, Route } from "react-router-dom";
import UserInfos from "./pages/UserPage";
import BlogListPage from "./pages/admin/Blogs/BlogListPage";
import AddBlogPage from "./pages/admin/Blogs/AddBlogPage";
import UpdateBlogPage from "./pages/admin/Blogs/UpdateBlogPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/user" element={<UserInfos />} />
        <Route path="/admin/*">
          <Route index element={<DashboardPage />} />
          <Route path="users" element={<UserPage />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route
            path="categories/update/:id"
            element={<UpdateCategoryPage />}
          />
          <Route path="categories/create" element={<AddCategoryPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/create" element={<AddProductPage />} />
          <Route path="products/update/:id" element={<UpdateProductPage />} />
          <Route path="coupons" element={<CouponsPage />} />
          <Route path="coupons/create" element={<AddCoupon />} />
          <Route path="coupons/update/:id" element={<UpdateCoupon />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="blogs" element={<BlogListPage />} />
          <Route path="blogs/create" element={<AddBlogPage />} />
          <Route path="blogs/update/:id" element={<UpdateBlogPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
