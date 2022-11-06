import {
  getFavoritesFromStorage,
  saveFavoriteToStorage,
} from "../utils/storage.js";

export const toggleFavorite = (e) => {
  const itemClass = e.target.classList;

  itemClass.toggle("fa");
  itemClass.toggle("far");

  const item = e.target.dataset;

  const { id, author, title, summary } = item;

  const favItem = {
    id,
    author,
    title,
    summary,
  };

  const currentFavorites = getFavoritesFromStorage();

  const favoriteExists = currentFavorites.find((fav) => fav.id === favItem.id);

  if (!favoriteExists) {
    currentFavorites.push(favItem);
    saveFavoriteToStorage(currentFavorites);
  } else {
    const newFavArr = currentFavorites.filter((item) => item.id !== favItem.id);
    saveFavoriteToStorage(newFavArr);
  }
};
