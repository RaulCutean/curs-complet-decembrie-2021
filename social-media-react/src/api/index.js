import { auth } from "./auth";

export const apiFactory = () => ({
  auth: () => auth(),
  posts: () => {},
});
