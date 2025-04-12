import { useState, useEffect } from "react";

export const useSession = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");

  useEffect(() => {
    const t = localStorage.token;
    if (t !== undefined) {
      setToken(t);
    }
    setLoading(false);
  }, []);

  return { loading, token };
};
