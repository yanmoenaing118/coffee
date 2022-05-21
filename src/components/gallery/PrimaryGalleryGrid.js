import React from "react";
import styled from "styled-components";

const Section = styled.section`
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
    /* background-color: purple; */
  }

  .item {
    &--1 {
      grid-column: 1 / 7;
    }

    &--2 {
      grid-column: 7 / 10;
    }

    &--3 {
      grid-column: 10 / -1;
      grid-row: 1 / span 2;
    }

    &--4 {
      grid-column: 1 / 3;
    }

    &--5 {
      grid-column: 3 / 5;
    }

    &--6 {
      grid-column: 5 / 10;
    }
  }
`;

export default function PrimaryGalleryGrid({ list }) {
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
