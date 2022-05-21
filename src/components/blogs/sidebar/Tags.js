import React from "react";
import styled from "styled-components";

import Div from "./Wrapper";

const tags = [
  {
    key: "green-tea",
    label: "Green tea",
  },
  {
    key: "black-coffee",
    label: "Black Coffee",
  },
  {
    key: "tea",
    label: "Tea",
  },
  {
    key: "c-p-d",
    label: "Coffee Packaging Design",
  },

  {
    key: "competition",
    label: "Competition",
  },
];

const List = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  [data-active="true"] {
    background-color: var(--primary-color);
    color: #ffffff;
  }
`;

const ListItem = styled.div`
  color: #7c7c7c;
  background-color: #eeeeee;
  border-radius: 4px;
  font-size: var(--text-4);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 0;
  cursor: pointer;

  &.tag {
    &-1 {
      flex-basis: 30%;
    }

    &-2 {
      flex-basis: 40%;
    }

    &-3 {
      flex: 1;
    }

    &-4 {
      flex: 2;
    }

    &-5 {
      flex:1;
    }
  }
`;

export default function Tags({ active }) {
  return (
    <Div>
      <h3>Tags</h3>
      <List>
        {tags.map((item, _) => (
          <ListItem
            key={item.key}
            data-active={active === item.key}
            className={`tag-${_ + 1}`}
          >
            {item.label}
          </ListItem>
        ))}
      </List>
    </Div>
  );
}
