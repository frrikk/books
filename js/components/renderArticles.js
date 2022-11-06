import { getFavoritesFromStorage } from "../utils/storage.js";
import { toggleFavorite } from "./toggleFavorite.js";

const form = document.querySelector("form");
form.addEventListener("submit", (e) => e.preventDefault());

export const renderArticles = (array) => {
  const favorites = getFavoritesFromStorage();

  const cardContainer = document.querySelector(".book-cards");
  cardContainer.innerHTML = "";

  array.forEach(({ author, summary, title, id }) => {
    const doesFavExist = favorites.find((fav) => parseInt(fav.id) === id);

    cardContainer.innerHTML += `
      <li key=${id} class="book--item">
          <p class="book__author">${author}</p>
          <p class="book__title">${title}</p>
          <p class="book__summary">${summary}</p>
          <i class="${
            doesFavExist ? "fa" : "far"
          } fa-heart" data-id="${id}" data-title="${title}" data-summary="${summary}" data-author="${author}"></i>
      </li>
`;
  });
  const addFavorite = document.querySelectorAll(".book--item i");

  addFavorite.forEach((add) => {
    add.addEventListener("click", toggleFavorite);
  });
};
