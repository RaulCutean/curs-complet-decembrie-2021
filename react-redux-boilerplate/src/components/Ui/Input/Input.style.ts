import styled from "styled-components";

export const Container = styled.div``;

export const Input = styled.input`
  border: unset;
  background-color: #fafafa;
  border-radius: 3px;
  color: #2b2922;
  padding: 5px;
  &:focus {
    outline: none;
    box-shadow: unset;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
`;
