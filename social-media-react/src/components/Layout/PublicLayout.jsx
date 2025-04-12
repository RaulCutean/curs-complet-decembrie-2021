import React from "react";
import { PublicContainer as Container } from "./Layout.style";
import { useSession } from "../../hooks";
import { Navigate } from "react-router-dom";

export function PublicLayout({ children }) {
  const { loading, loggedIn } = useSession();

  if (!loading && loggedIn) {
    return <Navigate replace to="/" />;
  }

  return <Container>{children}</Container>;
}
