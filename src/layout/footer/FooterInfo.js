import React from "react";
import { MaxWidth } from "components/MaxWidth";
import styled from "styled-components";
import { ReactComponent as IconPhone } from "assets/icons/pphone.svg";
import { ReactComponent as IconEmail } from "assets/icons/like.svg";
import { ReactComponent as IconLocation } from "assets/icons/location.svg";
import { ReactComponent as IconFacebook } from "assets/icons/facebook.svg";
import { ReactComponent as IconInstagram } from "assets/icons/instagram.svg";

import Logo from "assets/images/logo.svg";

const Wrapper = styled(MaxWidth)`
  width: 90%;
  & > section {
    /* border: 1px solid red; */
    margin-bottom: 3rem;

    &:last-child {
      margin-bottom: 0;
      padding-bottom: 4rem;
    }
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    padding: 8rem 0;
    padding-top: 9rem;

    & > section {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  color: #ffffff;

  .logo {
    align-self: center;
    width: 100px;
    height: 100px;
    overflow: hidden;
    img {
      /* border: 1px solid white; */
      width: 110%;
      height: 110%;
      object-fit: cover;
    }
  }
  p {
    font-size: var(--text-4);
    padding: 24px 0;
    line-height: 1.5;
    padding-right: 20px;
  }

  .offer {
    text-transform: uppercase;
    color: var(--primary-color);
    font-size: var(--text-7);
  }

  @media screen and (min-width: 1200px) {
    flex: 1.1;
    padding-right: 30px;
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  color: #ffffff;
  font-size: ${({ fontSize }) => fontSize};
  margin-bottom: ${({ mb }) => mb || "1.6rem"};
  @meida screen and (min-width: 1200px) {
    margin-bottom: ${({ mb }) => mb || "4rem"};
  }
`;

const OfficeShowrooms = styled.section`
  flex: 1;
  li {
    color: #ffffff;
    font-size: var(--text-4);
    font-weight: normal;
    display: grid;
    grid-template-columns: 38px 1fr;

    &:last-child {
      margin-top: 30px;
      .socials {
        display: flex;
        gap: 18px;
      }
    }
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const OpeningHours = styled.section`
  flex: 1;
  li {
    display: flex;
    gap: 4px;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: 1200px) {
    margin-left: 2;
  }
`;

const Day = styled.div`
  font-size: var(--text-4);
  color: #ffffff;
  flex: 0.45;
  position: relative;

  span:last-child {
    background-color: #222222;
    display: inline-block;
    z-index: 3;
    position: relative;
  }

  .dotted {
    width: 100%;
    height: 2px;
    display: block;
    border-top: 2px dotted var(--primary-color);
    position: absolute;
    top: 8px;
    z-index: 2;
  }
`;
const Hour = styled.div`
  font-size: var(--text-4);
  color: ${({ close }) => (close ? "var(--primary-color)" : " #ffffff")};
  flex: 0.55;
`;

const CoffeeShops = styled.section`
  @media screen and (min-width: 1200px) {
    padding-left: 50px;
    flex: 0.7;
  }
`;

const Shop = styled.div`
  padding-top: ${({ paddingTop }) => paddingTop || "0px"};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || "0px"};
  border-bottom: ${({ borderBottom }) => borderBottom || "none"};

  li {
    color: #ffffff;
    font-size: var(--text-2);
    font-weight: normal;
    display: grid;
    grid-template-columns: 26px 1fr;
    grid-column-gap: 8px;
    &:not(:last-child) {
      margin-bottom: 6px;
    }

    .icon svg {
      width: 100%;
    }
  }
`;

export default function FooterInfo() {
  return (
    <Wrapper>
      <Info>
        <div className="logo">
          <img src={Logo} alt="Mountaineer Coffee logo" />
        </div>
        <p>
          Outside of the 9-5 life, John at Manual Coffee Brewing enjoys roasting
          coffee at home and sharing his experiments with his followers. Learn
          about different techniques of home brewing, including pour-over and
          immersion.
        </p>
        <div className="offer">JOB offer</div>
      </Info>

      <OfficeShowrooms>
        <Title fontSize="var(--text-6)">Office and showrooms</Title>

        <ul>
          <li>
            <span className="icon">
              <IconPhone />
            </span>
            <span className="label">09969777822</span>
          </li>
          <li>
            <span className="icon">
              <IconEmail />
            </span>
            <div className="label">mountaineer@gmail.com</div>
          </li>
          <li>
            <span className="icon">
              <IconLocation />
            </span>
            <div className="label">
              No.4B Say Yone Road, Yankin Township,Yangon
            </div>
          </li>
          <li>
            <div></div>
            <div className="socials">
              <IconFacebook />
              <IconInstagram />
            </div>
          </li>
        </ul>
      </OfficeShowrooms>

      <OpeningHours>
        <Title fontSize="var(--text-6)">Opening hours</Title>
        <ul>
          <li>
            <Day>
              <span className="dotted"></span>
              <span>Monday</span>
            </Day>
            <Hour>8:30 AM - 5:30 PM</Hour>
          </li>

          <li>
            <Day>
              <span className="dotted"></span>
              <span>Tuesday</span>
            </Day>
            <Hour>8:30 AM - 5:30 PM</Hour>
          </li>

          <li>
            <Day>
              <span className="dotted"></span>
              <span>Wednesday</span>
            </Day>
            <Hour>8:30 AM - 5:30 PM</Hour>
          </li>

          <li>
            <Day>
              <span className="dotted"></span>
              <span>Thursday</span>
            </Day>
            <Hour>8:30 AM - 5:30 PM</Hour>
          </li>

          <li>
            <Day>
              <span className="dotted"></span>
              <span>Friday</span>
            </Day>
            <Hour>8:30 AM - 5:30 PM</Hour>
          </li>

          <li>
            <Day>
              <span className="dotted"></span>
              <span>Saturday</span>
            </Day>
            <Hour>8:30 AM - 5:30 PM</Hour>
          </li>

          <li>
            <Day>
              <span className="dotted"></span>
              <span>Sunday</span>
            </Day>
            <Hour close={true}>Closed</Hour>
          </li>
        </ul>
      </OpeningHours>

      <CoffeeShops>
        <Title fontSize="var(--text-6)">Coffee shops</Title>
        <Shop paddingBottom="20px" borderBottom="1px solid #434343">
          <Title fontSize="var(--text-4)" mb="20px">
            Yangon coffee shop
          </Title>
          <ul>
            <li>
              <span className="icon">
                <IconPhone />
              </span>
              <div className="label">(+66) 2-227-0941</div>
            </li>
            <li>
              <span className="icon">
                <IconLocation />
              </span>
              <div className="label">
                110 Sukhaphiban 2 Road, Dok Mai, Prawet, Bangkok.
              </div>
            </li>
          </ul>
        </Shop>

        <Shop paddingTop="16px">
          <Title fontSize="var(--text-4)" mb="20px">
            Bangkok coffee shop
          </Title>
          <ul>
            <li>
              <span className="icon">
                <IconPhone />
              </span>
              <div className="label">(+66) 2-227-0941</div>
            </li>
            <li>
              <span className="icon">
                <IconLocation />
              </span>
              <div className="label">
                110 Sukhaphiban 2 Road, Dok Mai, Prawet, Bangkok.
              </div>
            </li>
          </ul>
        </Shop>
      </CoffeeShops>
    </Wrapper>
  );
}
