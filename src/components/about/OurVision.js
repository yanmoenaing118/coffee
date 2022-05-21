import React from "react";
import styled from "styled-components";

import { MaxWidth } from "components/MaxWidth";
import { ReactComponent as IconCoreValue } from "assets/icons/core-value.svg";
import { ReactComponent as IconMission } from "assets/icons/our-mission.svg";
import { ReactComponent as IconVision } from "assets/icons/our-vision.svg";

const list = [
  {
    id: 1,
    title: "our core value",
    desc: "Passion. Excellence. Integrity.",
    icon: <IconCoreValue />,
  },
  {
    id: 2,
    title: "our vision",
    desc: "To be the leading purveyor of coffee in Myanmar and to contribute to the global coffee footprint.",
    icon: <IconVision />,
  },
  {
    id: 3,
    title: "our mission",
    desc: "Through passionately handpicked beans, Mountaineer Coffee is committed to be the main driver of growth in Myanmar’s coffee industry and it exists to serve with excellence through every cup of coffee.",
    icon: <IconMission />,
  },
];

const Section = styled.section`
  padding-top: 4rem;
  padding-bottom: 3.4rem;
  background-color: rgba(var(--primary-color-rgb), 0.1);
`;

const Wrapper = styled(MaxWidth)`
  display: flex;
  gap: 8rem;
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      margin-top: 1.4rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      font-size: var(--text-7);
    }

    p {
      text-align: center;
      font-size: var(--text-5);
    }
  }
`;

export default function OurHistory() {
  return (
    <Section>
      <Wrapper>
        {list.map((item) => (
          <div key={item} className="item">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </Wrapper>
    </Section>
  );
}
