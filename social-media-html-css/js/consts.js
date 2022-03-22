const emailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const baseURL = "https://backend-curs.herokuapp.com/api";

const ENDPOINTS = {
  REGISTER: "/users/register",
  LOGIN: "/users/login",
  GET_ALL_POSTS: "/posts",
};

const currentTime = Math.floor(new Date().getTime() / 1000);
