import styled from "styled-components";
import kanoteBg from "assets/icons/kanote.svg";

const Kanotebackground = styled.div`
  background-image: ${({ bgColor }) =>
    `linear-gradient(to bottom, ${bgColor}, ${bgColor}), url(${kanoteBg})`};
  background-position: top;
  /* background-position-y: -23px; */
  background-size: contain;
  background-repeat: no-repeat;
`;

export default Kanotebackground;
