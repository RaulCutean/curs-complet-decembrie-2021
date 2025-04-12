import React, { useState } from "react";
import { PublicLayout, Input, Button } from "../components";
import * as yup from "yup";
import { apiFactory } from "../api";

const schema = {
  first_name: yup.string().required("First name is required."),
  last_name: yup.string().required("Last name is required."),
  email: yup
    .string()
    .required("Email address is required.")
    .email("Invalid email address."),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters."),
};

export function RegisterPage() {
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  function handleInputChange(key, value) {
    setFormValues((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  async function handleSubmit() {
    setErrors({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    });
    //const isFormValid = await schema.isValid(formValues); // boolean
    //await schema.validate(formValues).catch((err) => console.log(err.message)); //verifica fieldurile si compune obiectul de errors

    const isFirstNameValid = await schema.first_name.isValid(
      formValues.first_name
    );
    const isLastNameValid = await schema.last_name.isValid(
      formValues.last_name
    );
    const isEmailValid = await schema.email.isValid(formValues.email);
    const isPasswordValid = await schema.password.isValid(formValues.password);
    await schema.first_name.validate(formValues.first_name).catch((err) =>
      setErrors((prevState) => ({
        ...prevState,
        first_name: err.message,
      }))
    );
    await schema.last_name.validate(formValues.last_name).catch((err) =>
      setErrors((prevState) => ({
        ...prevState,
        last_name: err.message,
      }))
    );
    await schema.email.validate(formValues.email).catch((err) =>
      setErrors((prevState) => ({
        ...prevState,
        email: err.message,
      }))
    );
    await schema.password.validate(formValues.password).catch((err) =>
      setErrors((prevState) => ({
        ...prevState,
        password: err.message,
      }))
    );

    if (
      !isFirstNameValid ||
      !isLastNameValid ||
      !isEmailValid ||
      !isPasswordValid
    ) {
      return;
    }

    const { status } = await apiFactory().auth().register(formValues);

    if (status === 201) {
      alert("Account created. Please log in.");
      window.location.href = "/login";
      return;
    }

    alert("Whoops. Something went wrong.");
  }

  return (
    <PublicLayout>
      <div>
        <h1>RegisterPage</h1>
        <Input
          value={formValues.first_name}
          onChange={(e) => handleInputChange("first_name", e.target.value)}
          label="First name"
          error={errors.first_name}
          type="text"
        />
        <Input
          value={formValues.last_name}
          onChange={(e) => handleInputChange("last_name", e.target.value)}
          label="Last name"
          error={errors.last_name}
          type="text"
        />
        <Input
          value={formValues.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          label="Email address"
          error={errors.email}
          type="email"
        />
        <Input
          value={formValues.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
          label="Password"
          error={errors.password}
          type="password"
        />
        <Button
          type="button"
          onClick={handleSubmit}
          label="Create my account"
        />
        <Button to="/login" label="Log in" />
      </div>
    </PublicLayout>
  );
}
