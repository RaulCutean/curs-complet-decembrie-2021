import React from "react";
import { Header, Logo, Nav, Link, Container, Logout } from "./Navigation.style";
import { Link as DefaultLink } from "react-router-dom";
import { useSession } from "../../hooks";

export const Navigation = () => {
  const [loading, loggedIn] = useSession();

  function handleLogOut() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Header>
      <Container>
        <DefaultLink to="/">
          <Logo src="https://source.unsplash.com/100x40" alt="logo" />
        </DefaultLink>
        <Nav>
          <Link to="/">home</Link>

          {!loading && loggedIn && <Link to="/servicii">servicii</Link>}

          <Link to="/contact">contact</Link>

          {!loading && loggedIn && (
            <Logout onClick={handleLogOut}>Log out</Logout>
          )}
          {!loading && !loggedIn && <Link to="/login">Login</Link>}
        </Nav>
      </Container>
    </Header>
  );
};
