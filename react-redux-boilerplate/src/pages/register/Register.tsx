import { Container } from "./Register.style";
import React, { useState } from "react";
import { Input } from "components";
import { useRegister } from "hooks/accounts/useRegister";

enum InputTypes {
  Text = "text",
  Number = "number",
  Date = "date",
  Textarea = "textarea",
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  prevState: null;
}

export const RegisterPage = () => {
  const [inputValueRegister, setInputValueRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [{ loading, error, data: token }, setRegister] = useRegister();

  const handleInputChange = (val: string, key: any) => {
    setInputValueRegister({ ...inputValueRegister, [key]: val });
  };

  const handleRegisterSubmit = () => {
    setRegister(
      inputValueRegister.firstName,
      inputValueRegister.lastName,
      inputValueRegister.email,
      inputValueRegister.password
    );
  };

  return (
    <Container>
      <Input
        type={InputTypes.Text}
        value={inputValueRegister.firstName}
        label="First name: "
        placeholder="Enter first name"
        name="firstName"
        onChange={handleInputChange}
      />
      <Input
        type={InputTypes.Text}
        value={inputValueRegister.lastName}
        label="Last name: "
        placeholder="Enter last name"
        name="lastName"
        onChange={handleInputChange}
      />
      <Input
        type={InputTypes.Text}
        value={inputValueRegister.email}
        label="Email: "
        placeholder="Enter email"
        name="email"
        onChange={handleInputChange}
      />
      <Input
        type={InputTypes.Text}
        value={inputValueRegister.password}
        label="Password: "
        placeholder="Enter password"
        name="password"
        onChange={handleInputChange}
      />
      <button onClick={() => handleRegisterSubmit()}>Register!</button>
    </Container>
  );
};
