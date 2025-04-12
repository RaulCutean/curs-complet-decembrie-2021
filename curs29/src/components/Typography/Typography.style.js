import styled from "styled-components/macro";

export const H1 = styled.h1`
  font-size: 5.6rem;
  line-height: 1.05em;
  font-weight: 500;
  color: ${({ color }) => (color ? color : "#2b2922")};
`;

export const H2 = styled.h2`
  font-size: 2.8rem;
  line-height: 1.15em;
  font-weight: 500;
  color: ${({ color }) => (color ? color : "#2b2922")};
`;

export const H3 = styled.h3`
  font-size: 2.2rem;
  line-height: 1.6em;
  font-weight: 500;
  color: ${({ color }) => (color ? color : "#2b2922")};
`;

export const P = styled.p`
  font-size: 1.6rem;
  line-height: 1.6em;
  font-weight: 300;
  color: ${({ color }) => (color ? color : "#2b2922")};
`;

export const Spacer = styled.div`
  width: 100%;
  height: ${({ size }) => (size ? size : 0)}rem;
`;

export function Typography() {
  return null;
}

Typography.H1 = H1;
Typography.H2 = H2;
Typography.H3 = H3;
Typography.P = P;
Typography.Spacer = Spacer;
