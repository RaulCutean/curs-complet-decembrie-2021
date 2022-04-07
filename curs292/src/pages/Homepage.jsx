import React from "react";
import { Accordion, Users } from "../components";

export const Homepage = () => {
  return (
    <div>
      <Users />
      <Accordion title="Titlu acordeon" content="Continut acordeon" />
      <Accordion title="Titlu acordeon 2" content="Continut acordeon 2" />
      <Accordion title="Titlu acordeon 3" content="Continut acordeon 3" />
    </div>
  );
};
