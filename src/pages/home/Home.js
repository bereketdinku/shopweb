import React from "react";
import Banner from "../../components/banner/Banner";
import BannerBottom from "../../components/banner/BannerBottom";
import Sale from "../../components/home/sale/Sale";
import NewArrivals from "../../components/home/newArrivals/NewArrivals";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import YearProduct from "../../components/yearProduct/YearProduct";
import SpecialOffers from "../../components/home/specialOffers/SpecialOffers";

function Home() {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  );
}

export default Home;
