import React from "react";
import styled from "styled-components";

import { MaxWidth } from "components/MaxWidth";
import ProductItem from "components/products/ProductItem";

const Section = styled.section`
  padding-top: 10rem;
  padding-bottom: 8rem;
  /* background-color: #fafafa; */
`;
const Wrapper = styled(MaxWidth)`
  h3 {
    font-family: var(--f-helvetica);
    font-size: var(--text-5);
    border-bottom: 2px solid #222222;
    padding-bottom: 1rem;
    margin-bottom: 4rem;
  }
`;

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 4rem;
`;

export default function RecommendedProducts({ list }) {
  return (
    <Section>
      <Wrapper>
        <h3>Recommended Products</h3>
        <List>
        {[1, 2, 3, 4, 5].map((item) => (
          <div>
            <ProductItem />
          </div>
        ))}
      </List>
      </Wrapper>
      
    </Section>
  );
}
