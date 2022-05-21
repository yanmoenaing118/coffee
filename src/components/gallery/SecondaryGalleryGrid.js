import React from "react";
import styled from "styled-components";

const Section = styled.section`

&:last-child {
  margin-bottom: 2rem;
}
  h1 {
    text-align: center;
    color: #505050;
    padding: 2rem 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 1.6rem;

  & > .item {
    background-color: purple;
  }

  .item {
    &--1 {
      grid-column: 1 / 4;
      grid-row: 1 / span 2;
    }

    &--2 {
      grid-column: 4 / 6;
    }

    &--3 {
      grid-column: 6 / 9;
    }

    &--4 {
      grid-column: 9 / -1;
    }

    &--5 {
      grid-column: 4 / 7;
    }

    &--6 {
      grid-column: 7 / -1;
    }
  }
`;

export default function SecondaryGalleryGrid({list}) {
  return (
    <Section>
      <h1>Lorem ipsum dolor sit amet</h1>
      <Grid>
        {list.map((image, _) => (
          <div
            className={`item item--${_ + 1}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        ))}
      </Grid>
    </Section>
  );
}
