import React, { useContext } from "react";
import ProjectInfo from "../components/project/ProjectInfo";
import FavoriteContext from "../components/store/favorite-context";

const Favourites = () => {
  const cntx = useContext(FavoriteContext);

  return cntx.favorites.map((item) => (
    <ProjectInfo key={item.id} info={item} />
  ));
};

export default Favourites;
