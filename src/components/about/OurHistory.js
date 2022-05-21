import React from "react";
import styled from "styled-components";

import SectionInfo from "components/utils/SectionInfo";
import KanoteBackground from "components/utils/KanoteBackground";

const Section = styled.section`
  padding-top: 6rem;
  padding-bottom: 6.5rem;
  /* height: 34rem;
  display: flex;
  align-items: center;
  justify-content: center; */
`;

export default function OurHistory() {
  return (
    <KanoteBackground bgColor="#F3F1ED29">
      <Section>
        <SectionInfo
          title="Our history"
          titleColor="#7C7C7C"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas officia placeat accusamus voluptatem consectetur reprehenderit laboriosam distinctio, quod, tenetur pariatur obcaecati! Architecto quidem quaerat possimus nihil minima eveniet temporibus voluptates."
        />
      </Section>
    </KanoteBackground>
  );
}
