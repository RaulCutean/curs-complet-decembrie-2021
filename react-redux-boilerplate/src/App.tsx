import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  LandingPage,
  LoginPage,
  RegisterPage,
  PostsPage,
  PostPage,
  AddEditPostPage,
} from "./pages";
import { Header } from "./components";
import { ProtectedRoute } from "components";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = sessionStorage.getItem("token") ? true : false;

  useEffect(() => {
    setIsLoggedIn(auth);
  }, [auth]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />

        <ProtectedRoute exact isAuth={isLoggedIn} path="/posts">
          <PostsPage />
        </ProtectedRoute>

        <ProtectedRoute exact isAuth={isLoggedIn} path="/post">
          <PostPage />
        </ProtectedRoute>

        <ProtectedRoute exact isAuth={true} path="/post/:slug">
          <AddEditPostPage />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
