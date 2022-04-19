import { useState, useEffect } from "react";

// din react 18, recomanda functii in loc de arrow function
export function useSession() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const tok = localStorage.token; // "" || undefined

    if (tok) {
      setToken(tok);
      setIsLoggedIn(true);
    }

    setLoading(false);
  }, []);

  return [loading, isLoggedIn, token];
}

// [l, i, t]
