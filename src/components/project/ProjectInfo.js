import React from "react";
import Card from "../ui/Card";

function ProjectInfo(props) {
  console.log(props.info);
  return (
    <Card>
      <div>{props.info.studentName}</div>
      <div>{props.info.studentLastName}</div>
      <div></div>
    </Card>
  );
}

export default ProjectInfo;
