import styled from "styled-components/macro";

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const InputElement = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #eaeaea;
  padding: 5px 10px;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #b0b0b0;
  }
`;

export const Textarea = styled.textarea`
  display: block;
  width: 100%;
  border: 1px solid #eaeaea;
  padding: 5px 10px;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #b0b0b0;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  display: block;
  margin-bottom: 5px;
  color: #2b2922;
`;

export const Error = styled.span`
  font-size: 14px;
  display: block;
  margin-top: 5px;
  color: #ff4a1c;
`;
