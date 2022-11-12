import React from "react";
import Card from "../components/ui/Card";

const StudentsProjects = () => {
  const lists = [1, 2, 3];
  return (
    <>
      {lists.map((item) => (
        <Card>item</Card>
      ))}
    </>
  );
};

export default StudentsProjects;
