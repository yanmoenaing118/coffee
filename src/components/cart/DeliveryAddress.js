import React from "react";
import styled from "styled-components";
import { MaxWidth } from "components/MaxWidth";

import AddressInfoForm from "./AddressInfoForm";
import ChoosePayment from "./ChoosePayment";

const Section = styled.section`
  /* border: 1px solid red; */
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

const Wrapper = styled(MaxWidth)`
  background-color: white;
  padding: 3rem 0;

  --delivery-max-width: 80%;
  .container {
    max-width: var(--delivery-max-width);
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-size: var(--text-5);
  }

  .address {
    display: flex;
    justify-content: space-between;
    .left {
      flex: 1.1;
    }
    .right {
      flex: 1;
    }
  }
`;

export default function DeliveryAddress() {
  return (
    <Section>
      <Wrapper>
        <div className="container">
          <h2>DELIVERY ADDRESS</h2>
          <div className="address">
            <div className="left">
              <AddressInfoForm />
            </div>
            <div className="right">
              <ChoosePayment />
            </div>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}
