import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../consts";

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
`;

export const Right = styled.div`
  max-width: 41.5rem;
  width: 100%;
`;
