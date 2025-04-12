import React from "react";
import { H1, H2, P, Input } from "../components";

export const Homepage = () => {
  return (
    <div>
      <H1 text="Text din props" />
      <H1 text="Alt text din props"></H1>
      <H2 text="Heading 2 din props"></H2>
      <P />
      <Input type="number" label="Numar telefon" />
      <Input type="date" error="Whoops" />
      <Input type="textarea" />
    </div>
  );
};
