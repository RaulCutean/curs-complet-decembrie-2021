import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Header, Left, Middle, Right, Logo } from "./Navigation.style";
import { Link } from "react-router-dom";
import { Input } from "../";

export function Navigation() {
  return (
    <Header>
      <Left>
        <Link to="/">
          <Logo icon={faCoffee} />
        </Link>
        <Input
          type="search"
          placeholder="Search"
          value=""
          onChange={() => console.log}
        />
      </Left>
      <Middle>
        <Link to="/">
          <FontAwesomeIcon icon={faCoffee} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faCoffee} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faCoffee} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faCoffee} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faCoffee} />
        </Link>
      </Middle>
      <Right>
        <Link to="/">
          <img src="https://source.unsplash.com/40x40" />
        </Link>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faCoffee} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faCoffee} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faCoffee} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faCoffee} />
            </Link>
          </li>
        </ul>
      </Right>
    </Header>
  );
}
