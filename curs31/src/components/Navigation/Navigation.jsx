import React from "react";
import { Header, Logo, Nav, Link, Container } from "./Navigation.style";
import { Link as DefaultLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <Header>
      <Container>
        <DefaultLink to="/">
          <Logo src="https://source.unsplash.com/100x40" alt="logo" />
        </DefaultLink>
        <Nav>
          <Link to="/">home</Link>
          <Link to="/servicii">servicii</Link>
          <Link to="/contact">contact</Link>
        </Nav>
      </Container>
    </Header>
  );
};
