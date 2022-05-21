import React from "react";
import styled from "styled-components";
import { Button } from "components/utils/Button";

const Section = styled.div`
  &:not(:last-child) {
    padding-bottom: 12rem;
  }
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  gap: 4.4rem;
`;

const Visual = styled.div`
  flex: ${({ flex }) => flex};
  height: ${({ height }) => height};
  background-color: #ffffff;
`;

const Description = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: ${({ justifyContent }) => justifyContent};
  p {
    text-align: right;
    padding: 1.1rem 0;
    font-size: var(--text-5);
  }
`;

const Title = styled.div`
  font-size: var(--text-7);
  font-weight: bold;
  text-transform: uppercase;
  font-family: var(--f-helvetica);
  text-align: right;
`;

export default function StorySection({ item, reverse }) {
  return (
    <Section reverse={reverse}>
      <Visual flex={item.visual.flex} height={item.visual.height}></Visual>
      <Description justifyContent={item.desc.justifyContent}>
        <Title>{item.desc.title}</Title>
        {item.desc.paras.map((p, _) => (
          <p key={_}>{p}</p>
        ))}
        <Button bgColor="#DFB368">Learn more</Button>
      </Description>
    </Section>
  );
}
