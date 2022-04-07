import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto 4rem;
  padding: 2.4rem;
  box-shadow: rgb(25 30 48 / 10%) 0px 20px 40px 0px;
  border-radius: 1.6rem;
`;

export const Title = styled.p`
  font-size: 1.8rem;
  line-height: 1.6em;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #b0b0b0;
  display: flex;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  img {
    display: block;
    margin-right: 1.5rem;
  }
`;

export const Content = styled.div`
  font-size: 1.6rem;
  line-height: 1.6em;
`;
