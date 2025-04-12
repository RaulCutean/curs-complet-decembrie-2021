import React, { useState, useEffect } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  function getUserData() {
    fetch("https://reqres.in/api/users?delay=3") // facem requestul
      .then((res) => res.json()) // convertim raspunsul in json
      .then((json) => setUsers(json.data)) // punem doar ce e in "data" in state-ul de users
      .catch((err) => console.error(err.message)) // prindem eroarea, daca exista
      .finally(() => setLoading(false)); // iesim din state-ul de loading
  }

  useEffect(() => {
    console.log("mount");
    getUserData();
  }, []);

  useEffect(() => {
    console.log("updating: ", users);
  }, [users, loading]);

  return (
    <div>
      {loading ? <h1>Fetching user data...</h1> : <h1>{users.length}</h1>}
    </div>
  );
};
