import styled from "styled-components/macro";
import { colors } from "../../consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  background-color: ${colors.white};
  margin-bottom: 4rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.05);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${colors.text.secondary};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  img {
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1.5rem;
  }
  div {
    p {
      &:first-of-type {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: ${colors.text.primary};
      }
      &:last-of-type {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: ${colors.text.secondary};
      }
    }
  }
`;

export const Content = styled.div`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${colors.text.secondary};
  p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: ${colors.text.primary};
    margin-bottom: 1rem;
  }
  img,
  video {
    width: calc(100% + 2rem);
    margin-left: -1rem;
    margin-right: -1rem;
    margin-bottom: 1rem;
    display: block;
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 1.4rem;
  line-height: 1.6rem;
  cursor: pointer;
  span {
    &.label {
      font-weight: 600;
      display: block;
      margin: 0 6px;
    }
    &.count {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.4rem;
      height: 1.4rem;
      font-size: 1rem;
      line-height: 1rem;
      color: ${colors.offWhite};
      background-color: ${colors.text.secondary};
      border-radius: 50%;
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  line-height: 1.6rem;
  color: ${colors.text.primary};
`;
