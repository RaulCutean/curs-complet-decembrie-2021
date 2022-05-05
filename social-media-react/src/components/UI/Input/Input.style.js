import styled, { css } from "styled-components";
import { colors } from "../../../consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: block;
  width: 100%;
  position: relative;

  ${({ noMargin }) =>
    noMargin
      ? ""
      : css`
          margin-bottom: 1rem;
        `}
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.6rem;
  line-height: 2.4rem;
  display: block;
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 50%;
  left: 0.8rem;
  transform: translateY(-50%);
  color: ${colors.text.secondary};
`;

const baseStyle = css`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${colors.text.primary};
  display: block;
  width: 100%;
  padding: 0.7rem 1.6rem;
  border-radius: 2rem;
  border: 1px solid ${colors.text.secondary};
  margin: 5px 0;
  transition: border 0.3s;

  &:focus {
    border: 1px solid ${colors.primary};
  }
`;

export const InputElement = styled.input`
  ${baseStyle}
  &[type="search"] {
    padding-left: 4rem;
  }
`;

export const Textarea = styled.textarea`
  ${baseStyle}
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  & > input {
    margin-right: 1.6rem;
  }
`;
