import React from "react";
import { Container, InputElement } from "./Input.style";

export function Input(props) {
  return (
    <Container>
      <InputElement {...props} />
    </Container>
  );
}
