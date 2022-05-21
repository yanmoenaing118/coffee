import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import CoffeeCupOne from "assets/images/coffee.svg";
import CoffeeCupTwo from "assets/images/coffee1.svg";

import Pagination from "components/utils/Pagination";
import PageBanner from "components/utils/PageBanner";
import SectionInfo from "components/utils/SectionInfo";
import KanoteBackground from "components/utils/KanoteBackground";

import MenuTabs from "components/menu/MenuTabs";
import MenuList from "components/menu/MenuList";

import PageTransition from "components/utils/PageTransition";

const bgImage = "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80";

const menus = [
  {
    id: 1,
    title: "Caffe latte",
    price: 2500,
    image: CoffeeCupOne,
  },
  {
    id: 2,
    title: "Caffe latte",
    price: 2500,
    image: CoffeeCupTwo,
  },
  {
    id: 3,
    title: "Cold Brew Coffee",
    price: 2500,
    image: CoffeeCupTwo,
  },
  {
    id: 4,
    title: "Caffe latte",
    price: 2500,
    image: CoffeeCupOne,
  },
  {
    id: 5,
    title: "Espresso Americano",
    price: 2500,
    image: CoffeeCupOne,
  },
  {
    id: 6,
    title: "Double Espressop",
    price: 2500,
    image: CoffeeCupTwo,
  },
  {
    id: 7,
    title: "Cold Brew Coffee",
    price: 2500,
    image: CoffeeCupTwo,
  },
  {
    id: 8,
    title: "Caffe latte",
    price: 2500,
    image: CoffeeCupOne,
  },
];

const IntroSection = styled.section`
  padding-top: 3rem;
  padding-bottom: 3.5rem;
  /* background-color: #f3f1ed; */

  @media screen and (min-width: 992px) {
    padding-top: 6rem;
  padding-bottom: 6.5rem;
  }
`;

export default function Menu() {
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
        <title>Mountaineer Coffee - Menus</title>
      </Helmet>
      <PageBanner bgImage={bgImage} />
      <KanoteBackground bgColor="#F3F1ED49">
        <IntroSection>
          <SectionInfo title="Mountaineer Coffee Menu" titlecolor="#9f9f9d" />
        </IntroSection>

        <MenuTabs active={currentTab} onChange={handleTabChange} />
        <MenuList
          list={menus}
          pagination={<Pagination onChange={handlePageChange} color="white" />}
        />
      </KanoteBackground>
    </>
  );
}
