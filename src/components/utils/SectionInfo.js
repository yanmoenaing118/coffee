import React from "react";
import IconFourStatges from "assets/icons/4-stages.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styled from "styled-components";

const Div = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-bottom: ${({ paddingBotton }) => paddingBotton}; */

  h2 {
    font-family: var(--family-andele);
    font-weight: normal;
    font-size: var(--text-4);
  }

  p {
  }

  .icon-four-stages {
    min-width: 110px;
    min-height: 30px;
    background-image: url(${IconFourStatges});
    background-repeat: no-repeat;
    background-size: contain;
    /* border: 1px solid red; */

    @media screen and (min-width: 786px) {
      min-width: 130px;
      min-height: 40px;
    }

    @media screen and (min-width: 992px) {
      min-width: 220px;
      min-height: 48px;
    }
  }

  @media screen and (min-width: 992px) {
    h2 {
      margin-top: 1rem;
      letter-spacing: 3px;
      font-size: var(--text-5);
      text-transform: capitalize;
    }

    p {
      width: 90%;
      text-align: center;
      margin: 0 auto;
      margin-top: 3.4rem;
      max-width: 85rem;
      color: #434343;
      font-size: var(--text-5);
    }
  }
`;

export default function SectionInfo({ title, description, titleColor }) {
  const controls = useAnimation();

  const initial = {
    y: 20,
    opacity: 0,
    scale: 0,
  };

  const final = {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  };

  const { ref, inView } = useInView({
    threshold: 1,
  });

  if (inView) {
    controls.start(final);
  }
  return (
    <Div ref={ref} initial={initial} animate={controls}>
      <div className="icon-four-stages"></div>
      <h2
        style={{
          color: titleColor,
        }}
      >
        {title}
      </h2>
      {description && <p>{description}</p>}
    </Div>
  );
}
