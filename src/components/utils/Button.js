import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 6px;
  outline: none;
  background-color: ${({ bgColor }) => bgColor || "var(--primary-color)"};
  color: #fff;
  text-transform: capitalize;
  padding: 1.6rem 2.4rem;
  font-size: var(--text-5);
  cursor: pointer;
  border: 1px solid transparent;

  &:active,
  &:focus,
  &:hover  {
    border: 1px solid #000;
  }
  
`;

export const ButtonReadMore = styled.button`
  border: none;
  outline: none;
  color: var(--primary-color);
  background: none;
  text-transform: capitalize;
  font-size: var(--text-4);
  font-weight: normal;
  cursor: pointer;
`;

export const ApplyButton = styled.button`
  border: none;
  outline: none;
  color: #fff;
  text-transform: capitalize;
  font-size: var(--text-3);
  cursor: pointer;
  border: 1px solid transparent;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  height: 36px;
  text-transform: uppercase;

  &:active,
  &:focus,
  &:hover {
    border: 1px solid #000;
  }


`;

export const CheckOutButton = styled(ApplyButton)`
  min-width: 100%;
`;

export const SaveChangesButton = styled(CheckOutButton)``;

export const CancelButton = styled(ApplyButton)`
  background-color: transparent;
  border: 1.5px solid #000000;
  color: #222222;
`;
