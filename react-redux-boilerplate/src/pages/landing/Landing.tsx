import React, { useState } from "react";
import { Container } from "./Landing.style";
import { Input } from "components";
import { useDispatch } from "react-redux";
import { getAccountData } from "store/accounts";

enum InputTypes {
  Text = "text",
  Number = "number",
  Date = "date",
  Textarea = "textarea",
}

export const LandingPage = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (val: string) => {
    setInputValue(val);
  };

  const handleButtonClick = () => {
    dispatch(getAccountData("alex1@gmail.nueste", "superSecretPass"));
  };

  return (
    <Container>
      <h1>Landing page</h1>
      <Input
        type={InputTypes.Textarea}
        value={inputValue}
        label="input label"
        placeholder="enter a value"
        name="myName"
        onChange={handleInputChange}
      />
      <button onClick={() => handleButtonClick()}>Click me!</button>
    </Container>
  );
};
