import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const InputElement = styled.input`
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 8px 1.6rem;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  display: block;
  width: 100%;

  &:focus {
    border: 1px solid #b0b0b0;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  line-height: 2.2rem;
  margin-bottom: 5px;
`;

export const Error = styled.span`
  display: block;
  font-size: 1.4rem;
  line-height: 2.2rem;
  margin-top: 5px;
  color: red;
`;
