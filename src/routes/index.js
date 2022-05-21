import React from "react";
import { Helmet } from "react-helmet-async";
import HomeBanner from "components/home/HomeBanner";
import FourStages from "components/home/FourStages";
import AboutUs from "components/home/About";
import PopularMenus from "components/home/PopularMenus";
import MountaineerProducts from "components/home/MountaineerProducts";
import NewsBlogs from "components/home/NewsBlogs";

import PageTransition from "components/utils/PageTransition";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Mountaineer Coffee</title>
      </Helmet>
      <HomeBanner />
      <FourStages />
      <AboutUs />
      <PopularMenus />
      <MountaineerProducts />
      <NewsBlogs />
    </>
  );
}
