import React from "react";
import { Route, Redirect } from "react-router-dom";

interface Props {
  path: string;
  isAuth: boolean;
  children: React.ReactElement;
  exact?: boolean;
}

export const ProtectedRoute = ({ path, isAuth, children, exact }: Props) => {
  return (
    <Route path={path} exact={exact}>
      {isAuth ? children : <Redirect to="/login" />}
    </Route>
  );
};
