import React from "react";
import styled from "styled-components";

const Section = styled.section`
  border-radius: 6px;
  position: sticky;
  top: 4rem;

  & > div {
    margin-bottom: 4rem;
  }
`;

export default function BlogSidebar({ search, categories, tags, populars }) {
  return (
    <Section>
      {search}
      {categories}
      {tags}
      {populars}
    </Section>
  );
}
