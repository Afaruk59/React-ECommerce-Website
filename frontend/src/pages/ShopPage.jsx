import React from "react";
import Categories from "../components/Category/Categories";
import Products from "../components/Product/Products";
import CampaignSingle from "../components/Campaign/CampaignSingle";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

function ShopPage() {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <CampaignSingle />
      <Products />
      <Footer />
    </>
  );
}

export default ShopPage;
