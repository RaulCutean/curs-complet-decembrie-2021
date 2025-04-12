import React from "react";
import { Container, Input as I, Label } from "./Input.style";

interface Props {
  type: string;
  value: string | ReadonlyArray<string> | number;
  label: string;
  placeholder: string;
  name: string;
  onChange: (value: string, info?: string) => void;
  disabled?: boolean;
}

export const Input = ({
  type,
  value,
  label,
  placeholder,
  name,
  disabled,
  onChange,
}: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      {type === "textarea" ? (
        <textarea
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        ></textarea>
      ) : (
        <I
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value, name)}
          disabled={disabled}
        />
      )}
    </Container>
  );
};
