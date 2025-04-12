import React from "react";
import {
  HeaderElement,
  Container,
  Logo,
  Navigation,
  NavElement,
} from "./Header.style";

export const Header = () => {
  return (
    <HeaderElement>
      <Container>
        <Logo src="https://source.unsplash.com/120x40" alt="react" />
        <Navigation>
          <NavElement>Homepage</NavElement>
          <NavElement>Services</NavElement>
          <NavElement>Contact</NavElement>
        </Navigation>
      </Container>
    </HeaderElement>
  );
};
