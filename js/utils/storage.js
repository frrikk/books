import { listKey } from "./listKey.js";

export const saveFavoriteToStorage = (value) => {
  localStorage.setItem(listKey, JSON.stringify(value));
};

export const getFavoritesFromStorage = () => {
  const value = localStorage.getItem(listKey);

  if (!value) {
    return [];
  } else {
    return JSON.parse(value);
  }
};
