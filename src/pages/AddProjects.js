import React from "react";
import { useNavigate } from "react-router-dom";
import NewProjectFrom from "../components/project/NewProjectFrom";

const AddProjects = () => {
  const navigate = useNavigate();
  function addProject(projectData) {
    fetch(
      "https://university-96152-default-rtdb.firebaseio.com/projects.json",
      {
        method: "POST",
        body: JSON.stringify(projectData),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <>
      <NewProjectFrom onAddProject={addProject} />
    </>
  );
};

export default AddProjects;
