import styled from "styled-components";
import { Link as L } from "react-router-dom";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: lightcoral;
  padding: 5px 0;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 4rem;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Link = styled(L)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  padding: 0 1rem;
`;
