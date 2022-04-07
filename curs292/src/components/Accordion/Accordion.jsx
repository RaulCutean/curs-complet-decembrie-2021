import React, { useState, useEffect } from "react";
import { Container, Title, Content } from "./Accordion.style";
import plusIcon from "./images/plus.svg";
import minusIcon from "./images/minus.svg";

/*
COMPONENT LIFECYCLE

component did mount - s-a incarcat prima data
component did update - s-a modificat ceva valoare din componenta
component will unmount - componenta dispare din ecran
*/

export const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  // componentDidMount
  useEffect(() => {
    console.log("component did mount");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("component did update");
  }, [open]);

  // componentWillUnmount || cleanup effect
  useEffect(() => {
    return function cleanup() {
      console.log("component will unmount");
    };
  }, []);

  return (
    <Container>
      <Title onClick={() => setOpen(!open)}>
        <img src={open ? minusIcon : plusIcon} alt="accordion icon" />
        <span>{title}</span>
      </Title>
      {open && <Content>{content}</Content>}
    </Container>
  );
};
