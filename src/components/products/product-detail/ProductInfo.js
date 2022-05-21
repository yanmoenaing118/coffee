import React from "react";
import styled from "styled-components";

import Stars from "components/utils/Stars";

const Container = styled.div`
  /* border: 1px solid #cdf; */
  position: sticky;
  top: 4rem;
  padding-bottom: 4rem;

  header {
    h2 {
    }
    .rating {
      margin: 0.5rem 0;
      display: flex;
      align-items: center;
      gap: 1rem;
      span {
        font-family: var(--family-h-medium);
        color: #222222;
        text-decoration: underline;
      }
    }
    .price {
      font-family: var(--family-h-medium);
      color: var(--primary-color);
    }
  }

  .desc {
    margin-top: 1.6rem;
    h3 {
      color: #222222;
      font-size: var(--text-5);
      font-family: var(--f-helvetica);
      font-weight: bold;
      text-decoration: underline;
    }

    p {
      font-size: var(--text-4);
    }
  }
`;

const Actions = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: flex-start;
`;

const Sizes = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #222222;
    font-family: var(--family-h-medium);
    display: block;
    min-width: 5.3rem;
  }

  .sizes {
    display: flex;
    gap: 1rem;
    button {
      background: transparent;
      border: 2px solid #707070;
      width: 7rem;
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--text-4);
    }
  }
`;

const Pack = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #222222;
    font-family: var(--family-h-medium);
    display: block;
    min-width: 5.3rem;
  }
  .packs {
    display: flex;
    gap: 1rem;

    button {
      background: transparent;
      border: 2px solid #707070;
      width: 10rem;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--text-4);
      text-transform: capitalize;
    }
  }
`;

const Qty = styled.div`
  display: flex;

  label {
    color: #222222;
    font-family: var(--family-h-medium);
    display: block;
    min-width: 5.3rem;
  }

  input {
    background: transparent;
    border: 2px solid #707070;
    width: 5rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--text-4);
    outline: none;
    text-align: center;
  }
`;

const AddToCart = styled.button`
  background-color: #e5b367;
  width: 22rem;
  height: 4.4rem;
  border: none;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 15px;
`;

export default function ProductInfo() {
  return (
    <Container>
      <header>
        <h2>Americano Pure Grades</h2>
        <div className="rating">
          <Stars count={4.5} />
          <span>9999 reviews</span>
        </div>
        <div className="price">12500 MMK</div>
      </header>

      <div className="desc">
        <h3>Description</h3>

        <p>
          After working in coffee shops throughout the United Kingdom and the
          United Arab Emirates,United Kingdom and the United Coffee bloggers are
          hard at work contributing to the coffee process in the production of
          valuable content for the coffee community. Whether you’re a barista
          working at a high-end cafe,…
        </p>
      </div>

      <Actions>
        <Sizes>
          <span>Sizes :</span>
          <div className="sizes">
            <button>50g</button>
            <button>100g</button>
          </div>
        </Sizes>

        <Pack>
          <span>pack :</span>
          <div className="packs">
            <button>beans</button>
            <button>ground</button>
          </div>
        </Pack>

        <Qty>
          <label htmlFor="qty">
            <span>Qty :</span>
          </label>
          <input type="number" id="qty" name="qty" value={1} />
        </Qty>

        <AddToCart>Add to cart</AddToCart>
      </Actions>
    </Container>
  );
}
