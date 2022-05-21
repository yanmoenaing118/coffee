import React, { useEffect } from "react";
import disableScroll from "disable-scroll";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.19);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  width: 60%;
  background-color: white;
  max-height: 80vh;
  padding: 4rem;
  padding-top: 6rem;
  overflow-y: scroll;
  position: relative;

  button {
    width: 30px;
    height: 30px;
    border: 1px solid purple;
    position: absolute;
    top:0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    margin: 1rem;

    &:active,
    &:focus,
    &:hover {
        border: 1px solid #222222;
        cursor: pointer;
    }

    &::before,
    &::after {
        content: "";
        display: block;
        height: 3px;
        width: 33px;
        background-color: var(--primary-color);
        position: absolute;
        border-radius: 2px;
    }

    &::before {

        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
  }
`;

const JobDetail = styled.article`
  .image {
    height: 200px;
    background-color: #222222;
  }
  h2 {
    margin-top: 2rem;
    font-weight: bold;
    font-family: var(--f-helvetica);
    font-size: var(--text-6);
    color: #222222;
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1.6rem;
  }
`;

export default function JobModal({ job }) {
  useEffect(() => {
    disableScroll.on(document.body, {
      authorizedInInputs: [32, 37, 38, 39, 40],
      disableKeys: false,
      disableScroll: true,
      disableWheel: false,
      keyboardKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
    });
    return () => disableScroll.off(document.body);
  }, []);

  return (
    <Container>
      <ModalWrapper>
        <button></button>
        <JobDetail>
          <div className="image"></div>
          <h2>Waiter(M/F)</h2>
          <p>
            After working in coffee shops throughout the United Kingdom and the
            United Arab Emirates,United Kingdom and the United Coffee bloggers
            are hard at work contributing to the coffee process in the
            production of valuable content for the coffee community. Whether
            you’re a barista working at a high-end cafe,…
          </p>
          <p>
            After working in coffee shops throughout the United Kingdom and the
            United Arab Emirates,United Kingdom and the United Coffee bloggers
            are hard at work contributing to the coffee process in the
            production of valuable content for the coffee community. Whether
            you’re a barista working at a high-end cafe,…
          </p>
          <p>
            After working in coffee shops throughout the United Kingdom and the
            United Arab Emirates,United Kingdom and the United Coffee bloggers
            are hard at work contributing to the coffee process in the
            production of valuable content for the coffee community. Whether
            you’re a barista working at a high-end cafe,…
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nam
            adipisci vel enim atque illum iste consequuntur vitae porro
            quibusdam molestiae, quae sit. Eum officia non earum, voluptatem vel
            rerum?
          </p>
        </JobDetail>
      </ModalWrapper>
    </Container>
  );
}
