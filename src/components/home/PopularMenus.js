import React from "react";
import styled from "styled-components";
import { MaxWidth } from "components/MaxWidth";
import SectionInfo from "components/utils/SectionInfo";
import CoffeeCupOne from "assets/images/coffee.svg";
import CoffeeCupTwo from "assets/images/coffee1.svg";
import MenuItem from "components/food-menu/MenuItem";

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
];

const Section = styled.section`
  background-color: #222222;
  border-bottom: 1px solid white;
  padding-top: 3rem;
  padding-bottom: 4.3rem;

  @media screen and (min-width: 786px) {
    padding-top: 5rem;
    padding-bottom: 10rem;
  }

  @media screen and (min-width: 922px) {
    padding-top: 7rem;
    padding-bottom: 12rem;
  }
`;

const Wrapper = styled(MaxWidth)`
  width: 96%;
`;

const Menus = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 3rem;
  grid-column-gap: 3.4rem;
  margin-top: 2rem;

  @media screen and (min-width: 992px) {
    grid-row-gap: 6rem;
    grid-column-gap: 9rem;
    margin-top: 8rem;
  }
`;

export default function PopularMenus() {
  return (
    <Section>
      <Wrapper>
        <SectionInfo title="Mountaineer Popular Menu" titleColor="white" />
        <Menus>
          {menus.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </Menus>
      </Wrapper>
    </Section>
  );
}
