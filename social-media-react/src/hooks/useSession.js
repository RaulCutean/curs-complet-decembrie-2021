import { useState, useEffect } from "react";

export function useSession() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(undefined);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const t = localStorage.token; // string || undefined
    if (t) {
      setToken(t);
      setLoggedIn(true);
    }
    setLoading(false);
  }, []);

  return { loading, token, loggedIn };
}
