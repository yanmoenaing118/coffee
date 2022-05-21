import React from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import bgImage from "assets/images/home-banner.svg";

import PageBanner from "components/utils/PageBanner";
import KanoteBackground from "components/utils/KanoteBackground";
import SectionInfo from "components/utils/SectionInfo";

import CartList from "components/cart/CartList";
import DeliveryAddress from "components/cart/DeliveryAddress";

const IntroSection = styled.section`
  padding-top: 8rem;
  padding-bottom: 7rem;
  /* background-color: #f3f1ed; */
`;

export default function cart() {
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>

      <PageBanner bgImage={bgImage} />
      <KanoteBackground bgColor="#FAFAFAad">
        <IntroSection>
          <SectionInfo title="Cart" />
        </IntroSection>
        <CartList list={[1, 2, 3, 4]} />
        <DeliveryAddress />
      </KanoteBackground>
    </>
  );
}
