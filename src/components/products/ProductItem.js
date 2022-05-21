import React from "react";
import styled from "styled-components";
import Stars from "components/utils/Stars";

const Product = styled.section`
  .image {
    margin-bottom: 1.5rem;
    --product-height: 220px;
    background-color: #eeeeee;
    border-radius: 6px;

    min-width: 100%;
    height: var(--product-height);

    img {
      width: 100%;
    }
  }
  h4 {
    color: #222222;
    font-weight: bold;
    font-size: var(--text-6);

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .rating {
    margin: 0.65rem 0;
    font-size: var(--text-4);
  }

  footer {
    .price {
      color: var(--primary-color);
      font-size: var(--text-5);
      font-weight: bold;
    }
  }
`;

export default function ProductItem({ item }) {
  return (
    <Product>
      <div className="image"></div>
      <h4>Americano Pure Grades Americano</h4>
      <div className="rating">
        <Stars count={4.5} />
      </div>
      <footer>
        <div className="price">125000 MMK</div>
        <div className="cart"></div>
      </footer>
    </Product>
  );
}
