import React from "react";

import styled from "styled-components";

const Loading = styled.div`
  display: block;
  position: relative;
  height: 1000px;
  width:100% ;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: black;

  display:flex ;
  align-items:center ;
  justify-content:center ;
  .container {
      position: relative;
  }
  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

export default function FallbackLoading() {
  return (
    <Loading>
      <div className="container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Loading>
  );
}
