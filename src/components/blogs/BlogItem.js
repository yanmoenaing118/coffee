import React from "react";
import styled from "styled-components";

import { Button } from "components/utils/Button";
import { ReactComponent as IconPeople } from "assets/icons/profile-blog.svg";
import { ReactComponent as IconLike } from "assets/icons/like.svg";
import { ReactComponent as IconComment } from "assets/icons/comment.svg";

const Div = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  box-shadow: 0 0 3px #00000029;
  border-radius: 6px;
  margin-bottom: 4rem;
  .image {
    background-color: #eeeeee;
    min-height: 180px;
    min-width: 100%;
  }
  h3 {
    color: #222222;
    font-family: var(--family-h-medium);
  }
  p {
    color: #7c7c7c;
    font-size: var(--text-4);
    padding-top: 1rem;
    padding-bottom: 2.4rem;
  }

  /* border: 1px solid red; */

  @media screen and (max-width: 786px) {
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 992px) {
    h3 {
      margin-top:1rem;
    }
  }

  @media screen and (min-width: 786px) {
    .image {
      min-height: 240px;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 2rem;
    padding-bottom: 3.4rem;

    .image {
      min-height: 280px;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
  margin-top: 1.6rem;
  margin-bottom: 3rem;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: var(--text-4);
    color: #7c7c7c;
  }
`;

export default function BlogItem({ device }) {
  return (
    <Div>
      <div className="image"></div>
      {(device === "lg" || device === "xlg") && (
        <Actions>
          <Action>
            <IconPeople />
            <span>Alex William</span>
          </Action>



          <Action>
            <IconComment />
            <span>
                      {new Date().toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
          </Action>
        </Actions>
      )}
      <h3>Americano Pure Grades Blog</h3>
      <p>
        After working in coffee shops throughout the United Kingdom and the
        United Arab Emirates,United Kingdom and the United Coffee bloggers are
        hard at work contributing to the coffee process in the production of
        valuable content for the coffee community. Whether you’re a barista
        working at a high-end cafe
      </p>
      <Button bgColor="#DFB368">read more</Button>
    </Div>
  );
}
