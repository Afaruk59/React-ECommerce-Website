import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Campaigns from "../components/Campaigns";
import Blogs from "../components/Blogs";
import Brands from "../components/Brands";
import CampaignSingle from "../components/CampaignSingle";

function HomePage() {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Blogs />
      <Brands />
      <CampaignSingle />
      <Footer />
    </>
  );
}

export default HomePage;
