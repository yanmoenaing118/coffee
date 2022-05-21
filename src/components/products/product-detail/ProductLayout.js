import React from "react";
import styled from "styled-components";
import { MaxWidth } from "components/MaxWidth";

const Section = styled.section`
  /* background-color: #fafafa; */
`;

const Wrapper = styled(MaxWidth)`
  display: flex;
  gap: 4rem;
  .media {
    flex: 1.6;
    overflow: hidden;
  }

  .content {
    flex: 1;
  }
`;

export default function ProductLayout({ media, content }) {
  return (
    <Section>
      <Wrapper>
        <div className="media">{media}</div>
        <div className="content">{content}</div>
      </Wrapper>
    </Section>
  );
}
