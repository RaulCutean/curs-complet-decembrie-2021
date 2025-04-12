import React from "react";
import { Navigation } from "../../";
import { Container, Content, Sidebar } from "./PageWrapper.style";

export const PageWrapper = ({ children, searchValue, handleSearch }) => {
  return (
    <Container>
      <Navigation searchValue={searchValue} handleSearch={handleSearch} />
      <Content>
        {children}
        <Sidebar>sidebar right</Sidebar>
      </Content>
    </Container>
  );
};
