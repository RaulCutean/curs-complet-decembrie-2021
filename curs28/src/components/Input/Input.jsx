import React from "react";
import { Container, InputElement, Textarea, Label, Error } from "./Input.style";

export const Input = ({ type, label, error }) => {
  console.log(type, label, error);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      {type === "textarea" ? <Textarea /> : <InputElement type={type} />}
      {error && <Error>{error}</Error>}
    </Container>
  );
};
