import React from "react";
import { CourseCard } from "../../";
import { Container } from "./HomepageCourseList.style";

export const HomepageCourseList = ({ courses }) => {
  return (
    <Container>
      {courses &&
        courses.length > 0 &&
        courses.map((course, index) => (
          <CourseCard
            key={`course_${index}`}
            icon={course.icon}
            location={course.location}
            name={course.name}
            certificate={course.certificate}
            session={course.session}
            url={course.url}
          />
        ))}
    </Container>
  );
};
