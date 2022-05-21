import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import bgImage from "assets/images/home-banner.svg";

import SectionInfo from "components/utils/SectionInfo";
import PageBanner from "components/utils/PageBanner";
import KanoteBackground from "components/utils/KanoteBackground";

import ProductLayout from "components/products/product-detail/ProductLayout";
import ProductSwiper from "components/products/product-detail/ProductSwiper";
import ProductInfo from "components/products/product-detail/ProductInfo";
import RecommendedProducts from "components/products/product-detail/RecommendedProducts";

const IntroSection = styled.section`
  padding-top: 6rem;
  padding-bottom: 6.5rem;
  /* background-color: #fafafa; */
`;


export default function ProductDetail() {
  return (
    <>
      <Helmet>
        <title>Mountaineer Coffee - Americano</title>
      </Helmet>
      <PageBanner bgImage={bgImage} />
      <KanoteBackground bgColor="#fafafa49">
        <IntroSection>
          <SectionInfo title="Receipes for you" titleColor="#7C7C7C" />
        </IntroSection>

        <ProductLayout media={<ProductSwiper />} content={<ProductInfo />} />
        <RecommendedProducts list={[]} />
      </KanoteBackground>
    </>
  );
}
