import { articlesUrl } from "./utils/data.js";
import {
  displayMessage,
  urlErrorMessage,
} from "./components/displayMessage.js";
import { filterArticles } from "./components/filterArticles.js";
import { renderArticles } from "./components/renderArticles.js";

const input = document.querySelector("input");

const fetchData = async () => {
  try {
    const response = await fetch(articlesUrl);
    const data = await response.json();

    renderArticles(data);
    filterArticles(data);
  } catch (err) {
    displayMessage("error", urlErrorMessage, ".book-cards");
  }
};

fetchData();
input.focus();
