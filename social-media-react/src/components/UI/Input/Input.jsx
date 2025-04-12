import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Typography } from "../../";
import {
  Container,
  InputElement,
  Textarea,
  CheckboxWrapper,
  SearchIcon,
} from "./Input.style";

export function Input({ type, label, value, onChange, placeholder, error }) {
  switch (type) {
    case "textarea":
      return (
        <Container>
          {label && <Typography.Label>{label}</Typography.Label>}
          <Textarea
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          ></Textarea>
          {error && <Typography.ErrorMessage>{error}</Typography.ErrorMessage>}
        </Container>
      );
    case "checkbox":
    case "radio":
      return (
        <Container>
          <CheckboxWrapper>
            <input type={type} value={value} onChange={onChange} />
            {label && <Typography.Label>{label}</Typography.Label>}
          </CheckboxWrapper>
          {error && <Typography.ErrorMessage>{error}</Typography.ErrorMessage>}
        </Container>
      );
    case "search":
      return (
        <Container noMargin>
          <SearchIcon icon={faSearch} />
          {label && <Typography.Label>{label}</Typography.Label>}
          <InputElement
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
          {error && <Typography.ErrorMessage>{error}</Typography.ErrorMessage>}
        </Container>
      );
    default:
      return (
        <Container>
          {label && <Typography.Label>{label}</Typography.Label>}
          <InputElement
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
          {error && <Typography.ErrorMessage>{error}</Typography.ErrorMessage>}
        </Container>
      );
  }
}
