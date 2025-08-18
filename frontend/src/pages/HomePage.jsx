import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Slider from "../components/Slider/Slider";
import Categories from "../components/Category/Categories";
import Products from "../components/Product/Products";
import Campaigns from "../components/Campaign/Campaigns";
import Blogs from "../components/Blog/Blogs";
import Brands from "../components/Brand/Brands";
import CampaignSingle from "../components/Campaign/CampaignSingle";

function HomePage() {
  return (
    <>
      <Slider />
      <Categories />
      <Products />
      <Campaigns />
      <Blogs blogCount={3} />
      <Brands />
      <CampaignSingle />
    </>
  );
}

export default HomePage;
