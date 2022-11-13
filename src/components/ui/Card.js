import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-2 p-16 m-8 items-center justify-between sm:items-stretch sm:justify-start shadow">
      {props.children}
    </div>
  );
};

export default Card;
