import React, { useEffect, useState } from "react";
import ProjectInfo from "../components/project/ProjectInfo";

const StudentsProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://university-96152-default-rtdb.firebaseio.com/projects.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const projects = [];
        for (const key in data) {
          const project = {
            id: key,
            ...data[key],
          };
          projects.push(project);
        }
        setIsLoading(false);
        setProjects(projects);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>در حال بارگیری...</p>
      </section>
    );
  }
  return (
    <>
      {projects.map((item) => (
        <ProjectInfo key={item.id} info={item} />
      ))}
    </>
  );
};

export default StudentsProjects;
