import React from "react";

import styled from "styled-components";

import { SaveChangesButton, CancelButton } from "components/utils/Button";

const Wrapper = styled.div`
  width: 80%;
  margin-left: auto;
`;

const AddressType = styled.div`
  .options {
    display: flex;
    gap: 2rem;
    aling-items: center;
  }
`;

const AddressLabel = styled.label`
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  .button-group {
    position: relative;
    --radio-btn-size: 14px;
    .radio-button {
      display: block;
      width: var(--radio-btn-size);
      height: var(--radio-btn-size);
      border: 1px solid #dfb368;
      border-radius: 50%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        content: "";
        width: 60%;
        height: 60%;
        display: block;
        position: absolute;
        border-radius: 100%;
        background-color: #dfb368;
        opacity: 0;
        transform: scale(0);
        transition: all 0.3s ease-out;
      }
    }

    input[type="radio"] {
      top: 0;
      position: absolute;
      opacity: 0;
      z-index: 1;

      &:checked + .radio-button::after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
  .label {
    font-size: var(--text-1);
  }
`;

const PaymentType = styled.div`
  margin-top: 2.2rem;
  margin-bottom: 3rem;
  .payment-options {
    display: flex;
    gap: 1.5rem;
    .payment-type {
      width: 68px;
      height: 36px;
      border: 1px solid #7a7a7a;
      cursor: pointer;
      &:hover {
        border-color: var(--primary-color);
      }
    }
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;

  div:first-child {
    flex: 1.4;
  }
`;

const Title = styled.div`
  font-size: var(--text-2);
  font-weight: bold;
  opacity: 0.7;
  margin-bottom: 0.4rem;
`;

export default function ChoosePayment() {
  return (
    <Wrapper>
      <AddressType>
        <Title>Address Type *</Title>
        <div className="options">
          <AddressLabel>
            <span className="button-group">
              <input type="radio" value="all" name="address" />
              <span className="radio-button"></span>
            </span>
            <span className="label">Home(All day delivery)</span>
          </AddressLabel>

          <AddressLabel>
            <span className="button-group">
              <input type="radio" value="between" name="address" />
              <span className="radio-button"></span>
            </span>
            <span className="label">Office (Delivery Between 9AM to 5PM)</span>
          </AddressLabel>
        </div>
      </AddressType>
      <PaymentType>
        <Title>Choose your payment method *</Title>
        <div className="payment-options">
          <div className="payment-type"></div>
          <div className="payment-type"></div>
        </div>
      </PaymentType>
      <Actions>
        <div>
          <SaveChangesButton bgColor="#E5B367">Save Changes</SaveChangesButton>
        </div>
        <div>
          <CancelButton>Cancel</CancelButton>
        </div>
      </Actions>
    </Wrapper>
  );
}
