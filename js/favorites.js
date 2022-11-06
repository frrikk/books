import { getFavoritesFromStorage } from "./utils/storage.js";
import {
  displayMessage,
  noFavoritesMessage,
} from "./components/displayMessage.js";
import { clearFavorites } from "./components/clearFavorites.js";

const clearButton = document.querySelector(".remove-favorites");

export const renderFavorites = () => {
  const favContainer = document.querySelector(".book-cards");
  const favorites = getFavoritesFromStorage();
  clearFavorites();

  favContainer.innerHTML = "";

  if (!favorites.length) {
    displayMessage("no-favorites", noFavoritesMessage, ".book-cards");
    clearButton.style.display = "none";
  }

  favorites.forEach(({ id, author, title, summary }) => {
    favContainer.innerHTML += `
    <li key=${id} class="book--item">
            <p class="book__author">${author}</p>
            <p class="book__title">${title}</p>
            <p class="book__summary">${summary}</p>
            <i class="fa fa-heart" data-id="${id}" data-title="${title}" data-summary="${summary}" data-author="${author}"></i>
        </li>
    `;
  });
};

renderFavorites();
