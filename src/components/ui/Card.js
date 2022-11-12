import React from "react";

const Card = (props) => {
  return (
    <div className="flex flex-2 items-center justify-between sm:items-stretch sm:justify-start shadow">
      {props.children}
    </div>
  );
};

export default Card;
