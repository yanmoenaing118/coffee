import styled from "styled-components";
import bgImage from "assets/images/home-banner.svg";
import { useRef } from "react";

const Section = styled.section`
  height: 280px;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media screen and (min-width: 768px) {
    height: 380px;
  }

  @media screen and (min-width: 992px) {
    height: 480px;
  }

  @media screen and (min-width: 1200px) {
    height: calc(100vh - var(--header-height));
  }
`;

const Hands = styled.div`
  width: 30%;
  height: 160px;
  position: absolute;
  bottom: 0;
  border: 2px solid red;

  .hands {
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 50%;
    border: 2px solid white;
  }

  .left {
    left: 0;
    bottom: -20px;
  }

  .right {
    right: 0;
  }

  @media screen and (min-width: 768px){
    width: 200px;
    height: 30vh;
  }
`;

export default function HomeBanner() {
  const sectionRef = useRef();
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const handleMouseMove = ({pageX, pageY}) => {
  
    const cstd = 20; /** constraint move */
  
    const mx = (cstd / sectionRef.current.offsetWidth) * pageX;
    const my = (cstd / sectionRef.current.offsetHeight) * pageY;
        
    leftRef.current.style.transform = `translate(-${mx}px, -${my}px)`;
    rightRef.current.style.transform = `translate(${mx}px, ${my}px)`;
  }

  return (
    <Section ref={sectionRef} onMouseMove={handleMouseMove}>
      <Hands>
        <div ref={leftRef} className="hands left"></div>
        <div ref={rightRef} className="hands right"></div>
      </Hands>
    </Section>
  );
}
