import styled, { css } from "styled-components";
import { Link as L } from "react-router-dom";
import { colors } from "../../../consts";

export const Link = styled(L)`
  display: block;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${colors.primary};
  font-weight: 400;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Btn = styled.input`
  display: block;
  font-size: 1.6rem;
  line-height: 2.4rem;
  border: 1px solid ${colors.primary};
  padding: 0.8rem 1.6rem;
  border-radius: 2rem;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  transition: opacity 0.3s;

  ${({ primary }) =>
    primary
      ? css`
          background-color: ${colors.primary};
          color: ${colors.offWhite};
        `
      : css`
          background-color: ${colors.white};
          color: ${colors.primary};
        `}

  &:hover {
    opacity: 0.9;
  }
  &:focus {
    border: 1px solid ${colors.primary};
  }
`;
