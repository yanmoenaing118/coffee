import React from "react";
import styled from "styled-components";
import { MaxWidth } from "components/MaxWidth";

const Section = styled(MaxWidth)`

  padding-bottom: 8rem;

  section {
    flex: 2;
    .pag {
      margin-top: 6.5rem;
    }
  }

  aside {
    flex: 1;
  }

  @media screen and (min-width: 992px) {
    display: flex;
    gap: 4rem;
  padding-bottom: 14rem;

  }
`;

export default function BlogsLayout({ device, content, aside, pagination }) {
  return (
    <Section>
      <section>
        {content}
        <div className="pag">{pagination}</div>
      </section>
      <aside>{aside}</aside>
    </Section>
  );
}
