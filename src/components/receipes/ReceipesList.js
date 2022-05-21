import React from "react";
import styled from "styled-components";

import { MaxWidth } from "components/MaxWidth";

const Section = styled.section``;

const Wrapper = styled(MaxWidth)`
  display: flex;
  justify-content: space-around;
`;

const Item = styled.li`
  font-size: var(--text-6);
  font-family: var(--f-helvetica);
  font-weigth: bold;
  color: #222222;
`;

export default function ReceipesList() {
  return (
    <Section>
      <Wrapper>
        {[1, 2, 3, 4].map((list, _) => (
          <ul key={_}>
            {[
              "Apple",
              "Avacado",
              "Banana",
              "Basil",
              "Blueberry",
              "Carrot",
              "Chicken",
            ].map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </ul>
        ))}
      </Wrapper>
    </Section>
  );
}
