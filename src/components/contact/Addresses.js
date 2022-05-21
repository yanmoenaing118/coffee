import React from "react";
import { MaxWidth } from "components/MaxWidth";
import styled from "styled-components";
import { ReactComponent as IconPhone } from "assets/icons/phone.svg";
import { ReactComponent as IconTime } from "assets/icons/time.svg";
import { ReactComponent as IconLocation } from "assets/icons/location.svg";

const Section = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Wrapper = styled(MaxWidth)`
  max-width: calc(var(--max-width) - 14rem);
  display: flex;
  gap: 8rem;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  .contact-image {
    flex: 1;
    min-height: 600px;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 6px;
  }

  .contact-info {
    flex: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      color: #434343;
      font-size: var(--text-7);
      font-family: var(--family-h-medium);
      text-transform: uppercase;
    }

    p {
      color: #7c7c7c;
      font-size: var(--text-4);
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    .detail {
      color: #505050;
      font-size: var(--text-5);
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;

      .icon {
        flex-basis: 12px;
      }

      .link {
        color: #0823cf;
        text-decoration: underline;
        display: block;
        min-width: 220px;
        font-family: var(--f-helvetica);
        font-weight: bold;
      }
    }
  }
`;

export default function Addresses({
  reverse,
  infoAlign,
  marginCollapsed,
  item,
}) {
  return (
    <Section>
      <Wrapper image={item.image} reverse={reverse}>
        <div
          className="contact-image"
          style={{
            marginTop: marginCollapsed ? "-10rem" : "",
          }}
        ></div>
        <div
          className="contact-info"
          style={{
            alignItems: infoAlign,
          }}
        >
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <div className="detail">
            <span className="icon">
              <IconPhone />
            </span>
            <span>09 7680 47177</span>
          </div>
          <div className="detail">
            <span className="icon">
              <IconLocation />
            </span>
            <span>No. (42)C, Yawmingyi Street, Dagon Township</span>
          </div>
          <div className="detail">
            <span className="icon">
              <IconTime />
            </span>
            <span>Monday to Saturday ( 8:30 AM - 5:30 PM )</span>
          </div>
          <div className="detail">
            <span className="icon"></span>
            <a className="link" href={item.glink} target="_blank">
              Google map location
            </a>
          </div>
        </div>
      </Wrapper>
    </Section>
  );
}
