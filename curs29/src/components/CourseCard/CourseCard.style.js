import styled from "styled-components";

export const Container = styled.div`
  border-radius: 2rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

export const Link = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CourseIcon = styled.img`
  height: 8.4rem;
  margin-left: -2rem;
`;

export const CourseLocation = styled.span`
  font-size: 1.4rem;
  padding: 3px;
  color: rgb(0, 197, 105);
  background-color: rgba(0, 197, 105, 0.1);
  border-radius: 3px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Min = styled.div`
  min-height: ${({ size }) => size};
  display: flex;
  align-items: flex-end;
`;
