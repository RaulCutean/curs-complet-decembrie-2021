import { useState, useEffect } from "react";
import axios from "axios";

export const useGetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  async function getUsers() {
    try {
      const { data, status, statusText } = await axios.get(
        "https://reqres.in/api/users?delay=1"
      );
      if (status === 200) {
        setUsers(data.data);
      } else {
        setError(statusText);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setFetching(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return { fetching, users, error };
};
