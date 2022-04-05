import React from "react";
import { Typography, HomepageCourseList } from "./components";

const courses = [
  {
    icon: "web",
    location: "Europa",
    name: "Front end Development",
    certificate: "Curs 29 certification",
    session: "April 5th",
    url: "https://itschool.ro",
  },
  {
    icon: "design",
    location: "Live Online",
    name: "Graphic design",
    certificate: "Curs 29 certification + alte certificari",
    session: "April 5th",
    url: "https://itschool.ro",
  },
  {
    icon: "web",
    location: "Europa",
    name: "Back end Development",
    certificate: "Curs 29 certification",
    session: "April 5th",
    url: "https://itschool.ro",
  },
  {
    icon: "design",
    location: "Live Online",
    name: "Marketing",
    certificate: "",
    session: "April 5th",
    url: "https://itschool.ro",
  },
  {
    icon: "web",
    location: "Europa",
    name: "DevOps",
    certificate: "Curs 29 certification",
    session: "April 5th",
    url: "https://itschool.ro",
  },
  {
    icon: "design",
    location: "Live Online",
    name: "Linux",
    certificate: "Curs 29 certification",
    session: "April 5th",
    url: "https://itschool.ro",
  },
];

function App() {
  return (
    <div>
      <Typography.H1>Hello React!</Typography.H1>
      <Typography.Spacer size={4} />
      <Typography.P color="grey">Sunt un text.</Typography.P>
      <HomepageCourseList courses={courses} />
    </div>
  );
}

export default App;
