import React from "react";
import styled from "styled-components";

export const MaxWidth = styled.div`
  width: 90%;
  max-width: var(--max-width);
  margin: 0 auto;
  height: 100%;
`;

export default ({ children }) => <MaxWidth>{children}</MaxWidth>;
