import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import bgImage from "assets/images/home-banner.svg";
import SectionInfo from "components/utils/SectionInfo";
import PageBanner from "components/utils/PageBanner";
import KanoteBackground from "components/utils/KanoteBackground";

import ReceipeLayout from "components/receipes/ReceipeLayout";
import ReceipeDetail from "components/receipes/receipes-details";
import ReceipeSidebar from "components/receipes/sidebar";
import ReceipeTags from "components/receipes/sidebar/Tags";
import RecommendedReceipes from "components/receipes/sidebar/Recommended";

const IntroSection = styled.section`
  padding-top: 6rem;
  padding-bottom: 6.5rem;
`;

export default function receipesDetails() {
  return (
    <>
      <Helmet>
        <title>Mountaineer Coffee - Receipe Detail</title>
      </Helmet>
      <PageBanner bgImage={bgImage} />
      <KanoteBackground bgColor="#FAFAFAaa">
        <IntroSection>
          <SectionInfo title="Receipe Detail" />
        </IntroSection>
        <ReceipeLayout
          content={<ReceipeDetail />}
          aside={<ReceipeSidebar tags={<ReceipeTags />} recommended={<RecommendedReceipes list={[1,2,3,4]} />} />}
        />
      </KanoteBackground>
    </>
  );
}
