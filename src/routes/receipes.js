import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import bgImage from "assets/images/home-banner.svg";
import SectionInfo from "components/utils/SectionInfo";
import PageBanner from "components/utils/PageBanner";
import KanoteBackground from "components/utils/KanoteBackground";
import Pagination from "components/utils/Pagination";

import ReceipesList from "components/receipes/ReceipesList";
import ReceipesGallery from "components/receipes/ReceipesGallery";

const IntroSection = styled.section`
  padding-top: 6rem;
  padding-bottom: 6.5rem;
`;

export default function receipes() {
  return (
    <>
      <Helmet>
        <title>Mountaineer Coffee - Receipes</title>
      </Helmet>
      <PageBanner bgImage={bgImage} />
      <KanoteBackground bgColor="#FAFAFAaa">
        <IntroSection>
          <SectionInfo title="Receipes for you" />
        </IntroSection>

        <ReceipesList list={[]} />

        <ReceipesGallery list={[]} pagination={<Pagination />} />
      </KanoteBackground>
    </>
  );
}
