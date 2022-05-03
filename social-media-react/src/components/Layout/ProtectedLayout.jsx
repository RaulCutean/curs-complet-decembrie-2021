import React from "react";
import { ProtectedContainer as Container } from "./Layout.style";
import { useSession } from "../../hooks";
import { Navigate } from "react-router-dom";

export function ProtectedLayout({ children }) {
  const { loading, loggedIn } = useSession();

  if (!loading && !loggedIn) {
    return <Navigate replace to="/login" />;
  }

  return <Container>{children}</Container>;
}
