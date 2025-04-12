import { Container } from "./Login.style";
import React, { useState } from "react";
import { Input } from "components";
import { useLogin } from "hooks/accounts/useLogin";
// import { useLogOut } from "hooks/accounts/useLogout";

enum InputTypes {
  Text = "text",
  Number = "number",
  Date = "date",
  Textarea = "textarea",
}

export const LoginPage = () => {
  const [inputValueEmail, setInputValueEmail] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");
  const [{ loading, error, data: token }, setLogin] = useLogin();
  // const [__, setLogout] = useLogOut();

  const handleInputChangeEmail = (val: string) => {
    setInputValueEmail(val);
  };

  const handleInputChangePassword = (val: string) => {
    setInputValuePassword(val);
  };

  const handleLoginSubmit = () => {
    setLogin(inputValueEmail, inputValuePassword);
  };

  return (
    <Container>
      <Input
        type={InputTypes.Text}
        value={inputValueEmail}
        label="Email: "
        placeholder="enter email"
        name="myName"
        onChange={handleInputChangeEmail}
      />

      <Input
        type={InputTypes.Text}
        value={inputValuePassword}
        label="Password: "
        placeholder="enter password"
        name="myName"
        onChange={handleInputChangePassword}
      />
      <button onClick={() => handleLoginSubmit()}>Login</button>
    </Container>
  );
};
