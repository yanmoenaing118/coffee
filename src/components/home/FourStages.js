import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import SectionInfo from "components/utils/SectionInfo";
import { MaxWidth } from "components/MaxWidth";
import { ReactComponent as IconHQC } from "assets/icons/high-quality-coffee.svg";
import { ReactComponent as IconPureGrades } from "assets/icons/pure-grades.svg";
import { ReactComponent as IconAttractive } from "assets/icons/attractive.svg";
import { ReactComponent as IconFairPrice } from "assets/icons/fair-price.svg";

import kanoteBg from "assets/icons/kanote.svg";

import styled from "styled-components";

const stages = [
  {
    id: 1,
    icon: <IconHQC />,
    title: "high quality coffee",
    desc: "Coffee is a beverage that puts one to sleep when not drank",
  },
  {
    id: 2,
    icon: <IconPureGrades />,
    title: "Pure grades",
    desc: "Good communication is just as stimulating as black coffee",
  },
  {
    id: 3,
    icon: <IconAttractive />,
    title: "Attractive packaging",
    desc: "Never trust anyone who doesn't drink coffee",
  },
  {
    id: 4,
    icon: <IconFairPrice />,
    title: "Fair price",
    desc: "Science may never come up with a better office communication system",
  },
];

const Section = styled.section`
  background-image: url(${kanoteBg});
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 3rem;
  padding-bottom: 0rem;

  @media screen and (min-width: 992px) {
    padding-top: 3rem;
    padding-bottom: 5rem;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 3rem;
    padding-bottom: 10rem;
  }
`;

const Wrapper = styled(MaxWidth)`
  @media screen and (min-width: 1200px) {
    margin-left: 18rem;
    margin-top: 4rem;
  }
`;

const Stages = styled(motion.div)`
  margin-top: 2rem;
  @media screen and (min-width: 992px) {
    margin-top: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 1rem;
  }
`;

const Stage = styled.div`
  position: relative;
  --box-size: 84px;
  display: grid;
  grid-template-columns: var(--box-size) 1fr;
  grid-template-rows: var(--box-size) calc(var(--box-size) - 20px);
  grid-column-gap: 3rem;

  span {
    grid-column: 1 / 2;
    grid-row: 2 / -1;
    border-left: 2px dashed var(--primary-color);
    transform: translateX(49%);
  }
  &:last-child {
    span {
      display: none;
    }
  }
  div {
    background-color: rgba(var(--primary-color-rgb), 0.1);
    width: var(--box-size);
    height: var(--box-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-family: var(--family-h-medium);
    color: var(--primary-color);
    font-size: var(--text-4);
    padding: 1rem 0;
    text-transform: capitalize;
    font-weight: 300;
  }

  p {
    color: #707070;
    font-size: var(--text-3);
    line-height: 1.4;
  }

  @media screen and (min-width: 992px) {
    display: block;
    span {
      display: block;
      position: absolute;
      top: calc(var(--box-size) / 2);
      left: var(--box-size);
      width: calc(100% - var(--box-size));
      border-top: 2px dashed var(--primary-color);
      transform: translateX(0);
    }
    &:last-child {
      span {
        display: none;
      }
    }
    div {
      background-color: rgba(var(--primary-color-rgb), 0.1);
      width: var(--box-size);
      height: var(--box-size);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    h3 {
      font-family: var(--family-h-medium);
      color: var(--primary-color);
      font-size: var(--text-4);
      padding: 1rem 0;
      text-transform: capitalize;
      font-weight: 300;
    }

    p {
      color: #707070;
      font-size: var(--text-3);
      padding-right: 5rem;
      line-height: 1.4;
    }
  }
`;

export default function FourStages() {
  const controls = useAnimation();

  const initial = {
    y: 20,
    opacity: 0,
  };

  const final = {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  };

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  if (inView) {
    controls.start(final);
  }

  return (
    <Section ref={ref}>
      <SectionInfo title="Four statges of coffee" titleColor="#707070" />
      <Wrapper>
        <Stages initial={initial} animate={controls}>
          {stages.map((item) => (
            <Stage key={item.id}>
              <span></span>
              <div>{item.icon}</div>
              <article>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            </Stage>
          ))}
        </Stages>
      </Wrapper>
    </Section>
  );
}
