import React from "react";
import styled from "styled-components";
import Product from "./ProductItem";

import { MaxWidth } from "components/MaxWidth";

const Section = styled.section`
  /* background-color: #f3f1ed; */
  padding-bottom: 12rem;
`;

const Wrapper = styled(MaxWidth)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Products = styled.div`
  align-self: stretch;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  margin-bottom: 12rem;
`;

export default function ProductsList({ pagination }) {
  return (
    <Section>
      <Wrapper>
        <Products>
          {[1, 2, 3, 4, 6, , 7, 8, 9].map((item) => (
            <div className="product-item">
              <Product item={{}} />
            </div>
          ))}
        </Products>
        {pagination}
      </Wrapper>
    </Section>
  );
}
