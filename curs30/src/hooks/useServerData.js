import { useState, useEffect } from "react";

export const useServerData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users?delay=3")
      .then((res) => res.json())
      .then((json) => setData(json.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { loading, data, error };
};
