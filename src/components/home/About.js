import React from "react";
import { MaxWidth } from "components/MaxWidth";
import styled from "styled-components";
import AboutUsImage from "assets/images/about-us.svg";
import { ReactComponent as IconCoffeeCup } from "assets/icons/about-us.svg";
import { Button } from "components/utils/Button";

const Section = styled.section`
  background-color: #f3f1ed;
  padding-top: 6rem;
  padding-bottom: 4rem;

  @media screen and (min-width: 992px) {
    padding-top: 14rem;
    padding-bottom: 8rem;
  }
`;
const Wrapper = styled(MaxWidth)`
  & > * {
    flex: 1;
  }

  .left {
    
    .img-wrappper {
      position: relative;
      background-color: rgba(var(--primary-color-rgb), 0.1);
      top: 0;
      img {
        object-fit: cover;
        max-width: 100%;
        height: 100%;

        @media screen and (min-width: 992px) {
          position: relative;
          top: -20px;
          left: -20px;
        }
      }
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1.4rem;
    header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      h3 {
        color: #707070;
        font-size: var(--text-5);
        margin-top: 1rem;
        font-weight: normal;
        text-transform: capitalize;
        font-family: var(--family-andale);
      }

      @media screen and (min-width: 992px) {
        justify-content: flex-start;
      }
    }

    .about {
      margin-top: 2rem;
      margin-bottom: 2.5rem;
      p {
        font-size: var(--text-5);
        line-height: 1.5;
        font-family: var(--family-h-light);

        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
    }
    @media screen and (min-width: 992px) {
      margin-top: 0;
      justify-content: flex-start;
    align-items: flex-start;
    }
  }

  @media screen and (min-width: 992px) {
    display: flex;
    gap: 5rem;
  }
`;

export default function About() {
  return (
    <Section>
      <Wrapper>
        <div className="left">
          <div className="img-wrappper">
            <img src={AboutUsImage} alt="Mountaineer Coffee" />
          </div>
        </div>
        <article className="right">
          <header>
            <IconCoffeeCup />
            <h3>About us</h3>
          </header>
          <div className="about">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>

            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.
            </p>
          </div>
          <div className="btn-container">
            <Button bgColor="#DFB368">Explore More</Button>
          </div>
        </article>
      </Wrapper>
    </Section>
  );
}
