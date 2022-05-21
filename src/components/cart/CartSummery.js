import React from "react";
import styled from "styled-components";
import { ApplyButton, CheckOutButton } from "components/utils/Button";

const Section = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  font-weight: bold;

  .summery {
    flex-basis: 300px;
    margin-left: auto;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 0.8rem 0;

  .delivery {
    font-size: var(--text-2);
  }
  .amount {
    margin-left: auto;
    font-weight: bold;
    font-family: var(--f-lato);
  }
  .total {
    text-transform: uppercase;
  }
`;

const Divider = styled.div`
  border-top: 1px solid gray;
`;

export default function CartSummery() {
  return (
    <Section>
      <div className="summery">
        <Row>
          <div className="amount">MMMK 9000,00</div>
        </Row>
        <Row>
          <div className="delivery">Delivery</div>
          <div className="amount">MMK 5,000</div>
        </Row>

        <Divider />

        <Row>
          <div className="total">total</div>
          <div className="amount">MMK 9050,00</div>
        </Row>
      </div>
    </Section>
  );
}
