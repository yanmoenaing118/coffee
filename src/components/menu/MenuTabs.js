import React from "react";
import styled from "styled-components";
import { MaxWidth } from "components/MaxWidth";

const tabs = [
  {
    key: "all",
    label: "All",
  },
  {
    key: "coffee",
    label: "coffee",
  },
  {
    key: "tea",
    label: "tea",
  },
  {
    key: "bread",
    label: "bread",
  },
  {
    key: "cake",
    label: "cake",
  },
];

const Div = styled.div`
  /* background-color: #f3f1ed; */
  padding-bottom: 4rem;

  @media screen and (min-width: 992px) {
    padding-bottom: 8rem;
  }
`;

const Wrapper = styled(MaxWidth)``;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media screen and (min-width: 786px) {
    gap: 4rem;
  }

  @media screen and (min-width: 992px) {
    gap: 6rem;
  }
`;

const Tab = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  font-family: var(--family-h-medium);
  color: ${({ active }) => (active ? "var(--primary-color)" : "#707070")};
  border-bottom: ${({ active }) =>
    active ? "2px solid var(--primary-color)" : "2px solid transparent"};
  padding-bottom: 1.6rem;

  @media screen and (max-width: 786px) {
    font-size: var(--text-2);
  }
`;

export default function MenuTabs({ active, onChange }) {
  return (
    <Div>
      <Wrapper>
        <Tabs>
          {tabs.map((item) => (
            <Tab
              key={item.key}
              active={active === item.key}
              onClick={() => onChange(item.key)}
            >
              {item.label}
            </Tab>
          ))}
        </Tabs>
      </Wrapper>
    </Div>
  );
}
