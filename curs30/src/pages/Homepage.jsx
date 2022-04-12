import React, { useState } from "react";
import { Layout, Input } from "../components";
import { useServerData, useSession } from "../hooks";

export const Homepage = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const { loading, data, error } = useServerData();
  const { loading: loadingSession, token } = useSession();

  function handleInputChange(value, key) {
    setFormValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  console.log(formValues);

  function handleSubmit() {
    // reset all previous errors
    setFormErrors({
      email: "",
      password: "",
      repeatPassword: "",
    });

    if (formValues.email === "") {
      setFormErrors((prevState) => ({
        ...prevState,
        email: "Email address is required.",
      }));
    }
    if (formValues.password === "") {
      setFormErrors((prevState) => ({
        ...prevState,
        password: "Password is required.",
      }));
    }
    if (formValues.repeatPassword === "") {
      setFormErrors((prevState) => ({
        ...prevState,
        repeatPassword: "Password is required.",
      }));
    }

    // final check for errors
    let canSubmit = true;

    for (const key in formErrors) {
      if (formErrors[key] !== "") canSubmit = false;
    }

    console.log(canSubmit);
    // do network request here
  }

  return (
    <Layout>
      <h1>Homepage</h1>

      <Input
        value={formValues.email}
        onChange={handleInputChange}
        name="email"
        placeholder="Email address"
        label="Email address"
        error={formErrors.email}
      />
      <Input
        value={formValues.password}
        onChange={handleInputChange}
        name="password"
        placeholder="Password"
        label="Label pentru password"
        type="password"
        error={formErrors.password}
      />
      <Input
        value={formValues.repeatPassword}
        onChange={handleInputChange}
        name="repeatPassword"
        placeholder="Repeat password"
        label="Repeat password"
        error={formErrors.repeatPassword}
      />
      <button onClick={() => handleSubmit()}>Submit</button>

      <h1>
        User is {!loadingSession && token !== "" ? "logged in" : "logged out"}
      </h1>

      {error !== "" && <div>{error}</div>}

      {!loading && error === "" ? (
        data.map((u) => (
          <div key={u.id}>
            {u.first_name} {u.last_name}
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};
