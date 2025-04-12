import React from "react";
import {
  HeaderWrapper,
  Container,
  Logo,
  Navigation,
  Link,
} from "./Header.style";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Link to="/">
          <Logo src="https://source.unsplash.com/100x40" />
        </Link>

        <Navigation>
          <Link to="/">Homepage</Link>
          <Link to="/posts">Posts</Link>
        </Navigation>
      </Container>
    </HeaderWrapper>
  );
};
