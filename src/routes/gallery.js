import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import bgImage from "assets/images/home-banner.svg";

import PageBanner from "components/utils/PageBanner";
import KanoteBackground from "components/utils/KanoteBackground";
import SectionInfo from "components/utils/SectionInfo";

import PrimaryGalleryGrid from "components/gallery/PrimaryGalleryGrid";
import SecondaryGalleryGrid from "components/gallery/SecondaryGalleryGrid";

const list1 = [
  "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1648910173540-86e0ee39fc1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
  "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
];

const list2 = [
  "https://images.unsplash.com/photo-1522012188892-24beb302783d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1507226983735-a838615193b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1565286364541-5f0326e869ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1534234757579-8ad69d218ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
];

const IntroSection = styled.section`
  padding-top: 6rem;
  padding-bottom: 6.5rem;
`;

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Mountaineer Coffee - Gallery</title>
      </Helmet>
      <PageBanner bgImage={bgImage} />
      <KanoteBackground bgColor="#FAFAFA99">
        <IntroSection>
          <SectionInfo
            title="Gallery"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti vitae mollitia dolorem minus vel ex possimus officia ullam voluptatibus? Distinctio voluptates rerum ipsum, praesentium blanditiis alias explicabo doloremque nobis dolore?"
          />
        </IntroSection>
        <PrimaryGalleryGrid list={list1} />
        <SecondaryGalleryGrid list={list2}/>

        <PrimaryGalleryGrid list={list1} />
        <SecondaryGalleryGrid list={list2}/>
      </KanoteBackground>
    </>
  );
}
