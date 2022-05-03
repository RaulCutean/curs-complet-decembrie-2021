import styled, { css } from "styled-components";
import { colors } from "../../../consts";

export const Container = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
`;

const baseStyle = css`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${colors.text.primary};
  display: block;
  width: 100%;
  padding: 0.7rem 1.6rem;
  border-radius: 2rem;
  border: 1px solid ${colors.text.secondary};
  background-color: ${colors.text.secondary};
  margin: 5px 0;
  transition: border 0.3s;

  &:focus {
    border: 1px solid ${colors.primary};
  }
`;

export const InputElement = styled.input`
  ${baseStyle}
`;

export const Textarea = styled.textarea`
  ${baseStyle}
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  & > input {
    margin-right: 1.6rem;
  }
`;
