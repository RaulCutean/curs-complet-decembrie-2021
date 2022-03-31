import React from "react";

export const H1 = (props) => {
  return <h1>{props.text}</h1>;
};

export const H2 = ({ text }) => {
  return <h2>{text}</h2>;
};

export const P = () => {
  return <p>Paragraph</p>;
};
