import Header from ".";

import React from "react";

export default function WithHeader({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
