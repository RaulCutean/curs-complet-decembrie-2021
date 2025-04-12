import { auth } from "./auth";

// factory pattern
export const api = () => ({
  auth: () => auth(),
});
