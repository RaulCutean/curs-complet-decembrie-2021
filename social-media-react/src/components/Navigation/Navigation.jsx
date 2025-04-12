import React from "react";
import { faCoffee, faSignOut } from "@fortawesome/free-solid-svg-icons";
import {
  Header,
  Left,
  Middle,
  Right,
  Logo,
  Link,
  MiddleIcon,
  ProfileLink,
  LeftIcon,
} from "./Navigation.style";
import { Input } from "../";

export function Navigation({ searchValue, handleSearch }) {
  function handleSignOut() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <Header>
      <Left>
        <Link to="/">
          <Logo icon={faCoffee} />
        </Link>
        <Input
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Left>
      <Middle>
        <Link to="/">
          <MiddleIcon icon={faCoffee} />
        </Link>
        <Link to="/">
          <MiddleIcon icon={faCoffee} />
        </Link>
        <Link to="/">
          <MiddleIcon icon={faCoffee} />
        </Link>
        <Link to="/">
          <MiddleIcon icon={faCoffee} />
        </Link>
        <Link to="/">
          <MiddleIcon icon={faCoffee} />
        </Link>
      </Middle>
      <Right>
        <ProfileLink to="/">
          <img src="https://source.unsplash.com/40x40" alt="nume prenume" />
        </ProfileLink>
        <ul>
          <li>
            <Link to="/">
              <LeftIcon icon={faCoffee} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <LeftIcon icon={faCoffee} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <LeftIcon icon={faCoffee} />
            </Link>
          </li>
          <li>
            <LeftIcon icon={faSignOut} onClick={handleSignOut} />
          </li>
        </ul>
      </Right>
    </Header>
  );
}
