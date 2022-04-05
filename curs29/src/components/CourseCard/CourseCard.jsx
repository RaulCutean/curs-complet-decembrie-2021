import React from "react";
import {
  Container,
  Header,
  CourseIcon,
  CourseLocation,
  Footer,
  Min,
} from "./CourseCard.style";
import { Typography } from "../";
import { images } from "./images";

export const CourseCard = ({
  icon,
  location,
  name,
  certificate,
  session,
  url,
}) => {
  return (
    <Container>
      <Header>
        <CourseIcon src={images[icon]} alt={icon} />
        <CourseLocation>{location}</CourseLocation>
      </Header>
      <Typography.Spacer size={1.5} />
      <Min size="64px">
        <Typography.H2>{name}</Typography.H2>
      </Min>
      <Typography.Spacer size={1} />
      <Min size="4.8rem">
        <Typography.P>{certificate}</Typography.P>
      </Min>
      <Typography.Spacer size={1} />
      <Typography.H3>{session}</Typography.H3>
      <Typography.Spacer size={1} />
      <Footer>
        <img src={images.arrow} alt={`go to ${name} ${url}`} />
      </Footer>
    </Container>
  );
};
