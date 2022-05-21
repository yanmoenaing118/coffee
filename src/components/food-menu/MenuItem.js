import React from "react";
import styled from "styled-components";

const Menu = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
  border-top-left-radius: 40rem;
  border-bottom-left-radius: 40rem;

  position: relative;
  --img-size: 36px;
  height: calc(var(--img-size) - 8px);
  border: 1px solid var(--primary-color);
  padding: 0 0.5rem;

  .image {
    position: absolute;
    left: -1rem;
    width: var(--img-size);
    height: var(--img-size);
    img {
      width: 100%;
    }
  }

  h4 {
    margin-left: 4rem;
    font-size: var(--text-0);

    @media screen and (min-width: 786px) {
      font-size: var(--text-4);
      margin-left: calc(var(--img-size) - 1rem);
    }

    @media screen and (min-width: 992px) {
      font-size: var(--text-6);
      margin-left: calc(var(--img-size) - 1rem);
    }
  }

  strong {
    color: var(--primary-color);
    font-size: var(--text-0);

    @media screen and (min-width: 786px) {
      font-size: var(--text-4);
    }
    @media screen and (min-width: 992px) {
      font-size: var(--text-6);
    }
  }

  @media screen and (min-width: 786px) {
    --img-size: 80px;
    padding: 0 1.4rem;
  }

  @media screen and (min-width: 992px) {
    --img-size: 110px;
    padding: 0 2rem;
  }

  @media screen and (max-width: 785px) {
    --img-size: 50px;
  }
`;

export default function MenuItem({ item }) {
  return (
    <Menu>
      <div className="image">
        <img src={item.image} alt={item.title} />
      </div>
      <h4>{item.title}</h4>
      <strong>{item.price} MMK</strong>
    </Menu>
  );
}
