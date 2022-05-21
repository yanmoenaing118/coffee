import React from "react";
import styled from "styled-components";

import Div from "./Wrapper";

const InputGroup = styled.div`
  display: flex;
`;
const Input = styled.input`
  padding: 1.4rem 0 1.4rem 1.2rem;
  flex: 1;
  color: #222222;
  font-weight: var(--family-h-medium);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #eeeeee;
  font-size: var(--text-4);
  border: none;

  &::placeholder {
    color: #7c7c7c;
    font-size: var(--text-4);
  }
`;
const SearchBtn = styled.button`
  border: none;
  margin-left: -5px;
  background-color: var(--primary-color);
  width: 50px;
`;

export default function Search() {
  return (
    <Div>
      <h3>Search</h3>
      <InputGroup>
        <Input placeholder="Search Blog" />
        <SearchBtn role="button"></SearchBtn>
      </InputGroup>
    </Div>
  );
}
