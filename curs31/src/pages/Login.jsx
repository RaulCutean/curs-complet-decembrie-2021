import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Input } from "../components";
import { useSession } from "../hooks";
import { api } from "../api";

export function LoginPage() {
  const [formValues, setFormValues] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const [loading, loggedIn] = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    !loading && loggedIn && navigate("/");
  }, [loading, loggedIn, navigate]);

  function handleInputChange(key, value) {
    setFormValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  async function handleSubmitForm() {
    const { data, status, statusText } = await api()
      .auth()
      .login(formValues.email, formValues.password);

    if (status === 200) {
      localStorage.setItem("token", data.token);
      return navigate("/servicii");
    }

    alert(statusText);
  }

  return (
    <Layout>
      <h1>Login page</h1>
      <Input
        placeholder="Email address"
        value={formValues.email}
        onChange={(e) => handleInputChange("email", e.target.value)}
        type="email"
      />
      <Input
        placeholder="Password"
        value={formValues.password}
        onChange={(e) => handleInputChange("password", e.target.value)}
        type="password"
      />
      <button onClick={handleSubmitForm}>Log in</button>
    </Layout>
  );
}
