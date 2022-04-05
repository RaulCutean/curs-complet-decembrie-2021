import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 120rem;
  margin: auto;
  & > div {
    max-width: 28rem;
    width: 100%;
    margin: 0 1rem 2rem;
  }
`;
