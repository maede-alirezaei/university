import { createContext, useState } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavoriteHandler: (project) => {},
  removeFavoriteHandler: (id) => {},
  itemIsFavoriteHandler: (id) => {},
});
export function FavoriteContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(project) {
    setUserFavorites((prevUserFavourites) => {
      return prevUserFavourites.concat(project);
    });
  }
  function removeFavoriteHandler(projectId) {
    setUserFavorites((prevUserFavourites) => {
      return prevUserFavourites.filter((item) => item.id !== projectId);
    });
  }
  function itemIsFavoriteHandler(projectId) {
    return userFavorites.some((item) => item.id === projectId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavoriteHandler,
    removeFavoriteHandler,
    itemIsFavoriteHandler,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;
