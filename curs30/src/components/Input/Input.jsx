import React from "react";
import { Container, InputElement, Label, Error } from "./Input.style";

export const Input = ({
  value,
  onChange,
  name,
  placeholder,
  label,
  error,
  type,
}) => {
  return (
    <Container>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputElement
        value={value}
        onChange={(e) => onChange(e.target.value, name)}
        placeholder={placeholder}
        id={name}
        type={type ? type : "text"}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};
