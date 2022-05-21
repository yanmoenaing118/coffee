import React from "react";
import styled from "styled-components";
import { MaxWidth } from "components/MaxWidth";

const Section = styled(MaxWidth)`
  padding-bottom: 14rem;
  display: flex;
  gap: 4rem;

  section {
    flex: 2;
    .pag {
      margin-top: 6.5rem;
    }
  }

  aside {
    flex: 1;
  }
`;

export default function ReceipeLayout({ content, aside, pagination }) {
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
