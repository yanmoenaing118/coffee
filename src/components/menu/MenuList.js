import React from "react";
import styled from "styled-components";

import { MaxWidth } from "components/MaxWidth";
import MenuItem from "components/food-menu/MenuItem";

const Section = styled.section`
  /* background-color: #f3f1ed; */
  padding-bottom: 8rem;

  @media screen and (min-width: 992px) {
    padding-bottom: 12rem;
  }
`;

const Wrapper = styled(MaxWidth)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Menus = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 4rem;
  margin-bottom: 6rem;
  align-self: stretch;

  @media screen and (min-width:992px) {
    grid-column-gap: 6rem;
  grid-row-gap: 7rem;
  margin-bottom: 12rem;
  } 
`;

export default function MenuList({ list, pagination }) {
  return (
    <Section>
      <Wrapper>
        <Menus>
          {list.map((item) => (
            <div key={item.id}>
              <MenuItem item={item} />
            </div>
          ))}
        </Menus>
        {pagination}
      </Wrapper>
    </Section>
  );
}
