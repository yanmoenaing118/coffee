import React from "react";
import styled from "styled-components";
import FooterInfo from "./FooterInfo";

const Footer = styled.footer`
  background-color: #222222;
  padding-top: 6rem;
`;

const NewSelector = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const NewSelectorTitle = styled.h3`
  color: var(--primary-color);
  font-weight: normal;
  font-family: var(--family-h-medium);
  font-size: var(--text-4);
  margin-bottom: 10px;

  @media screen and (min-width: 992px) {
    font-size: var(--text-6);
    margin-bottom: 20px;
  }
`;

const NewSelectorInputGroup = styled.div`
  width: 320px;
  display: flex;
  & > input {
    width: 100%;
    padding: 14px;
    border-radius: 6px;
    border: 1px solid var(--primary-color);
    font-size: var(--text-4);
    color: var(--primary-color);
    font-weight: normal;

    &::placeholder {
      font-size: var(--text-4);
      color: #c4c4c4;
    }

    &:focus {
      outline: none;
    }

    @media screen and (min-width:992px) {

    padding: 18px;
    }
  }

  & > button {
    width: 90px;
    margin-left: -90px;
    background-color: var(--primary-color);
    cursor: pointer;
    border: none;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    font-size: var(--text-4);
    color: #ffffff;

    @media screen and (min-width: 786px) {
    width: 107px;
    margin-left: -100px;
      
    }
  }

  @media screen and (min-width: 992px) {
    width: 470px;
  }
`;

const MadeByVenuslab = styled.div`
  height: 38px;
  background-color: #7c7c7c;
  .wrapper {
    width: 94%;
    max-width: var(--max-width);
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: #ffffff;
      font-size: calc(var(--text-1) - 3px);
      font-weight: lighter;

      span {
        text-decoration: underline;
        a {
          color: inherit;
        }
      }

      @media screen and (min-width: 786px) {
        font-size: var(--text-3);
      }
    }
  }
`;

export default function FooterComponent() {
  return (
    <Footer>
      <NewSelector>
        <NewSelectorTitle>Submit Your Email For Promotion</NewSelectorTitle>
        <NewSelectorInputGroup>
          <input type="text" placeholder="Enter a valid email address" />
          <button>Submit</button>
        </NewSelectorInputGroup>
      </NewSelector>

      <FooterInfo />

      <MadeByVenuslab>
        <div className="wrapper">
          <p>Copyright@ {new Date().getFullYear()}.All rights reserved</p>
          <p>Privacy Policy</p>
          <p>
            Made with love by{" "}
            <span>
              <a href="https://venuslab.co/" target="_blank">
                Venus Lab
              </a>
            </span>
          </p>
        </div>
      </MadeByVenuslab>
    </Footer>
  );
}
