import React from "react";
import styled from "styled-components";

import { ReactComponent as IconPeople } from "assets/icons/profile-blog.svg";
import { ReactComponent as IconLike } from "assets/icons/like.svg";
import { ReactComponent as IconComment } from "assets/icons/comment.svg";

const Div = styled.div`
  background-color: #ffffff;
  padding: 2rem 2.4rem;
  padding-bottom: 20rem;
  box-shadow: 0 0 3px #00000029;
  border-radius: 6px;
  margin-bottom: 4rem;
  .image {
    background-color: #eeeeee;
    min-height: 280px;
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

  .tags-title {
    margin-top: 3rem;
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

const Tags = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 4rem;
`;

const Tag = styled.li`
  background-color: #eeeeee;
  padding: 1rem;
  color: #7c7c7c;
  font-size: var(--text-4);
  border-radius: 4px;
`;

export default function BlogItem({ item }) {
  return (
    <Div>
      <div className="image"></div>
      <Actions>
        <Action>
          <IconPeople />
          <span>Alex William</span>
        </Action>
      </Actions>
      <h3>The best latte</h3>
      <p>
        After working in coffee shops throughout the United Kingdom and the
        United Arab Emirates,United Kingdom and the United Coffee bloggers are
        hard at work contributing to the coffee process in the production of
        valuable content for the coffee community. Whether you’re a barista
        working at a high-end cafe
      </p>

      <p>
        After working in coffee shops throughout the United Kingdom and the
        United Arab Emirates,United Kingdom and the United Coffee bloggers are
        hard at work contributing to the coffee process in the production of
        valuable content for the coffee community. Whether you’re a barista
        working at a high-end cafe
      </p>

      <p>
        After working in coffee shops throughout the United Kingdom and the
        United Arab Emirates,United Kingdom and the United Coffee bloggers are
        hard at work contributing to the coffee process in the production of
        valuable content for the coffee community. Whether you’re a barista
        working at a high-end cafe
      </p>

      <h3>How to produce from coffee beans</h3>

      <p>
        After working in coffee shops throughout the United Kingdom and the
        United Arab Emirates,United Kingdom and the United Coffee bloggers are
        hard at work contributing to the coffee process in the production of
        valuable content for the coffee community. Whether you’re a barista
        working at a high-end cafe
      </p>

      <h3 className="tags-title">Related tags</h3>

      <Tags>
        <Tag>Latte</Tag>
      </Tags>
    </Div>
  );
}
