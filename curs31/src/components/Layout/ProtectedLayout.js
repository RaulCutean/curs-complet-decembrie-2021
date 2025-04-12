import React from "react";
import { Navigation } from "../";
import { useSession } from "../../hooks";
import { useNavigate } from "react-router-dom";

export const ProtectedLayout = ({ children }) => {
  const [loading, loggedIn] = useSession();
  const navigate = useNavigate();

  // {loading: true, loggedIn: false}
  // {loading: false, loggedIn: false}

  !loading && !loggedIn && navigate("/");

  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
