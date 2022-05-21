import React from "react";
import styled from "styled-components";
import { ApplyButton, CheckOutButton } from "components/utils/Button";

const Section = styled.div`
  width: 80%;
  margin: 0 auto;
  font-weight: bold;
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  .promotion {
    display: flex;
    gap: 1rem;
    min-width: 322px;
  }

  .checkout {
    min-width: 324px;
  }
`;

const PromoInput = styled.input`
  flex: 1;
  border: 1px solid #000000;
  font-size: 12px;
  padding: 0 8px;
  &::placeholder {
    font-size: 14px;
    text-transform: capitalize;
  }
`;

export default function Promotion() {
  return (
    <Section>
      <Wrapper>
        <div className="promotion">
          <PromoInput placeholder="promo code" />
          <ApplyButton bgColor="#E5B367">Apply</ApplyButton>
        </div>
        <div className="checkout">
          <CheckOutButton bgColor="#E5B367">Proceed to checkout</CheckOutButton>
        </div>
      </Wrapper>
    </Section>
  );
}
