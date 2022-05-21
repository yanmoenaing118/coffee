import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { MaxWidth } from "components/MaxWidth";
import SectionInfo from "components/utils/SectionInfo";
import ProductImage from "assets/images/product.jpg";
import { Button } from "components/utils/Button";
import Stars from "components/utils/Stars";
import Badge from "components/utils/Badge";

const Section = styled.section`
  background-color: #f3f1ed;
  padding-top: 3rem;
  padding-bottom: 4rem;

  @media screen and (min-width: 1200px) {
    padding: 9rem 0;
  }
`;

const Wrapper = styled(MaxWidth)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media screen and (min-width: 1200px) {
    gap: 6rem;
  }
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 2rem;
  margin-bottom:2rem;

  @media screen and (min-width: 992px) {
    padding: 0 6rem;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    gap: 4rem;
    margin-bottom: 0;
  }
`;

const Product = styled.div`
position: relative;
  .image {
    margin-bottom: 1.5rem;
    --product-height: 220px;
    background-color: #cccccc;
    border-radius: 6px;

    min-width: 100%;
    width: var(--product-width);
    height: var(--product-height);

    img {
      width: 100%;
    }
  }

  h4 {
    line-height: 1;
    color: #222222;
    font-weight: bold;
    font-size: var(--text-6);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (min-width: 786px) {
      line-height: 1.5;
    }
  }

  .rating {
    margin: 0.5rem 0;
    font-size: var(--text-4);
  }

  .price {
    color: var(--primary-color);
    font-size: var(--text-5);
    font-weight: bold;
  }

  @media screen and (max-width: 786px) {

    .image {
      --product-height: 160px;
    }

    h4 {
      font-size: var(--text-4);
    }
    .rating {
      font-size: var(--text-2);

    }

    .price {
      font-size: var(--text-3);
    }
  }
`;

export default function MountaineerProducts() {
  const navigate = useNavigate();
  return (
    <Section>
      <Wrapper>
        <SectionInfo title="Mountaineer Product" />
        <Products>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Product key={item}>
              {item ==2 && <Badge>Sale</Badge>}
              <div className="image">
                {/* <img src={ProductImage} alt="Mountainner Product" /> */}
              </div>
              <h4>Americano Pure Grades Americano</h4>
              <div className="rating">
                <Stars count={4.5} />
              </div>
              <div className="price">125000 MMK</div>
            </Product>
          ))}
        </Products>
        <div>
          <Button bgColor="#DFB368" onClick={() => navigate("/products")}>
            View all
          </Button>
        </div>
      </Wrapper>
    </Section>
  );
}
