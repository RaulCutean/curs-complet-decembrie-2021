import styled from "styled-components";

export const HeaderElement = styled.header`
  background-color: #2b2922;
  padding: 5px 1.5rem;
  font-size: 1.6rem;
  color: #fafafa;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 4rem;
  display: block;
`;

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavElement = styled.li`
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 8px 1rem;
`;
