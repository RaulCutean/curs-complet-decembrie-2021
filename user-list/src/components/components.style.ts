import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Sidebar = styled.div`
  width: 220px;
`;

export const Users = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  overflow-y: scroll;
  align-items: flex-start;
  & > div {
    width: calc(25% - 3rem);
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin: 5px;
  border: 1px solid black;
  &:focus,
  &:hover {
    border: 1px solid black;
  }
`;
