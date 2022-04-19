import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 1rem;
`;

export const InputElement = styled.input`
  display: block;
  width: 100%;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 8px 1.6rem;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  color: #2b2922;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #b0b0b0;
  }
`;
