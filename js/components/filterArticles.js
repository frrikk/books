import { displayMessage, noFilterMatches } from "./displayMessage.js";
import { renderArticles } from "./renderArticles.js";

export const filterArticles = (articles) => {
  const searchFilter = document.querySelector("#filter");

  searchFilter.onkeyup = (e) => {
    const searchValue = e.target.value.trim().toLowerCase();

    const filterOnAuthors = articles.filter((article) => {
      if (article.author.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    renderArticles(filterOnAuthors);

    if (!filterOnAuthors.length) {
      displayMessage("no-search-match", noFilterMatches, ".book-cards");
    }
  };
};
