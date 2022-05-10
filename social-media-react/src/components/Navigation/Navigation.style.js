import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../consts";
import { Link as L } from "react-router-dom";

export const Link = styled(L)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MiddleIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: ${colors.offWhite};
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: ${colors.primary};
`;

export const Left = styled.div`
  max-width: 41.5rem;
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Logo = styled(FontAwesomeIcon)`
  font-size: 4rem;
  color: ${colors.offWhite};
`;

export const Middle = styled.div`
  max-width: 50rem;
  width: 100%;
  display: flex;
`;

export const Right = styled.div`
  max-width: 41.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
  }
`;

export const ProfileLink = styled(L)`
  display: flex;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const LeftIcon = styled(FontAwesomeIcon)`
  font-size: 2.4rem;
  margin: 0 0.8rem;
  color: ${colors.offWhite};
`;
