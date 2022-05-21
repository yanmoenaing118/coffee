import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import SectionInfo from "components/utils/SectionInfo";
import PageBanner from "components/utils/PageBanner";
import Pagination from "components/utils/Pagination";
import KanoteBackground from "components/utils/KanoteBackground";

import ProductTabs from "components/products/ProductTabs";
import ProductsList from "components/products/ProductsList";

import bgImage from "assets/images/home-banner.svg";

const IntroSection = styled.section`
  padding-top: 6rem;
  padding-bottom: 6.5rem;
`;


export default function Products() {
  const [currentTab, setCurrentTab] = useState("all");

  const handleTabChange = (key) => {
    setCurrentTab(key);
  };

  const handlePageChange = (e) => {
    console.log("page ", e.selected + 1);
  };

  return (
    <>
      <Helmet>
        <title>Mountaineer Coffee - Products</title>
      </Helmet>
      <PageBanner bgImage={bgImage} />
      <KanoteBackground bgColor="#f3f1ed49">
        <IntroSection>
          <SectionInfo
            title="Mountaineer Coffee Products"
            titlecolor="#9f9f9d"
          />
        </IntroSection>
        <ProductTabs active={currentTab} onChange={handleTabChange} />
        <ProductsList pagination={<Pagination onChange={handlePageChange} color="white"/>}  />
      </KanoteBackground>
    </>
  );
}
