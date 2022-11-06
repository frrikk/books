import { listKey } from "../utils/listKey.js";
import { renderFavorites } from "../favorites.js";

export const clearFavorites = () => {
  const clearBtn = document.querySelector(".remove-favorites");
  clearBtn.addEventListener("click", clearList);
};

const clearList = () => {
  if (confirm("Are you sure you want to delete your favorites?")) {
    localStorage.removeItem(listKey);
    renderFavorites();
  }
};
