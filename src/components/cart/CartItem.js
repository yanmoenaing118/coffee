import React from "react";
import styled from "styled-components";

import Stars from "components/utils/Stars";

const Cart = styled.div`
  display: flex;
  gap: 9rem;
`;
const ProductImage = styled.div`
  flex-basis: 120px;
  border: 1px solid #ccc;
`;
const CartDetails = styled.div`
  padding: 1.6rem 0;
  border-bottom: 1px solid #c4c4c4;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  h4 {
    text-transform: uppercase;
    color: #333333;
    font-family: var(--f-helvetica);
    font-weight: bold;
    font-size: var(--text-2);
  }

  div {
    font-size: var(--text-1);
    font-weight: bold;
  }
`;
const Qty = styled.div``;
const Price = styled.div`
  font-size: var(--text-2);
  font-weight: bold;
`;
const Delete = styled.div`
  text-align: right;
  color: red;
  
`;

export default function CartItem() {
  return (
    <Cart>
      <ProductImage></ProductImage>
      <CartDetails>
        <ProductInfo>
          <h4>Americano pure grades</h4>
          <Stars count={4.5} />
          <div>MMK 3000</div>
        </ProductInfo>
        <Qty>1</Qty>
        <Price>MMK 3000</Price>
        <Delete>delete</Delete>
      </CartDetails>
    </Cart>
  );
}
