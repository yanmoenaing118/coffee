import React from "react";
import styled from "styled-components";

import { MaxWidth } from "components/MaxWidth";
import CartItem from "./CartItem";
import CartSummery from "./CartSummery";
import Promotion from "./PromotionCheckout";

const Section = styled.section`
  padding-top: 6rem;
`;

const Wrapper = styled(MaxWidth)`
  background-color: white;
  padding: 3rem 0;
  --cart-list-max-width: 80%;

  h2 {
    max-width: var(--cart-list-max-width);
    margin: 0 auto;
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-size: var(--text-5);
  }
`;

const List = styled.ul`
  max-width: var(--cart-list-max-width);
  margin: 0 auto;
  li {
    margin-bottom: 3rem;
  }
`;

export default function CartList({ list }) {
  return (
    <Section>
      <Wrapper>
        <h2>Shopping Cart</h2>
        <List>
          {list.map((item, _) => (
            <li key={_} className="cart-item">
              <CartItem />
            </li>
          ))}
        </List>
        <CartSummery />
        <Promotion />
      </Wrapper>
    </Section>
  );
}
