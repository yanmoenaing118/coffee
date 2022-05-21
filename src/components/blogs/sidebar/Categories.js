import React from "react";
import styled from "styled-components";

import Div from "./Wrapper";

const List = styled.ul``;
const ListItem = styled.li`
  margin-bottom: 0.8rem;
  background-color: #eeeeee;
  padding: 1rem 2rem;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  span {
    font-size: var(--text-4);
    color: #7c7c7c;
  }
`;

export default function Categories({ list }) {
  return (
    <Div>
      <h3>Categories</h3>
      <List>
        {list.map((item) => (
          <ListItem key={item.id}>
            <span>{item.title}</span>
            <span>{item.count}</span>
          </ListItem>
        ))}
      </List>
    </Div>
  );
}
