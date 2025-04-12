import styled from "styled-components";

export const Remove = styled.span`
  display: block;
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background-color: red;
  color: white;
  border-radius: 50%;
`;

export const Container = styled.div`
  font-size: 1.6rem;
  line-height: 2.4rem;
  display: flex;
  border: 1px solid black;
  margin: 0 1.5rem 3rem;
  padding: 5px;
  &:hover {
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
    ${Remove} {
      opacity: 1;
    }
  }
`;

export const Name = styled.span`
  display: block;
  flex: 1;
`;

export const Count = styled.span`
  display: block;
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: grey;
  color: white;
`;
