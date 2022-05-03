import styled from "styled-components";
import { colors } from "../../consts";

const H1 = styled.h1`
  font-size: 3.2rem;
  line-height: 1.05;
  color: ${colors.text.primary};
  font-weight: 600;
`;

const P = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${colors.text.primary};
  font-weight: 400;
`;

const Label = styled.label`
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${colors.text.primary};
  font-weight: 400;
`;

const ErrorMessage = styled.span`
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${colors.error};
  font-weight: 400;
`;

export function Typography() {
  return null;
}

Typography.H1 = H1;
Typography.P = P;
Typography.Label = Label;
Typography.ErrorMessage = ErrorMessage;
