import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 6px;
  box-shadow: 0 0 3px #00000029;

  h3 {
    font-size: var(--text-6);
    color: #222222;
    margin-bottom: 1.5rem;
  }
`;

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
