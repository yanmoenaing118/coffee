import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  height: 280px;
  position: relative;

  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 10rem 0;

  @media screen and (min-width: 786px) {
    height: 380px;
  }

  @media screen and (min-width: 992px) {
    height: 44vh;
  }
`;

const Logo = styled.div`
  width: 18rem;
  height: 18rem;
  background-color: #fff;
  border-radius: 100%;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;

export default function PageBanner({ bgImage }) {
  return <Banner bgImage={bgImage}>{/* <Logo /> */}</Banner>;
}
