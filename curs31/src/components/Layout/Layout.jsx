import React from "react";
import { Navigation } from "../";

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
