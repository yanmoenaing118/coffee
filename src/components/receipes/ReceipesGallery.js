import React from "react";

import styled from "styled-components";

import { MaxWidth } from "components/MaxWidth";

const Section = styled.section`
  padding-top: 6rem;
  padding-bottom: 6rem;

  .pg {
    margin-top: 2rem;
  }
`;

const Wrapper = styled(MaxWidth)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;
`;

const Item = styled.div`
  .image {
    background-color: #00000029;
    height: 340px;
    border-radius: 6px;
  }

  h4 {
    text-align: center;
    padding-top: 1rem;
    font-size: var(--text-6);
    font-family: var(--family-h-medium);
    color: #222222;
  }
`;

export default function ReceipesGallery({ pagination }) {
  return (
    <Section>
      <Wrapper>
        {new Array(15).fill(1).map((_, idx) => (
          <Item key={idx}>
            <div className="image"></div>
            <h4>Item {idx}</h4>
          </Item>
        ))}
      </Wrapper>
      <div className="pg">{pagination}</div>
    </Section>
  );
}
