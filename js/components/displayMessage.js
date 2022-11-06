export const displayMessage = (messageType, message, target) => {
  const element = document.querySelector(target);
  element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
};

export const urlErrorMessage =
  "Oops! Something went wrong, please reload the page";
export const loginInputEmptyMessage =
  "Please fill in necessary input fields to log in";

export const noFilterMatches = `<div><i class="fa-solid fa-circle-exclamation"></i> Please search for another author, could not find the one you are looking for</div>`;

export const noFavoritesMessage = `<a href="../../index.html"> <i class="fa-solid fa-arrow-left"></i> No favorites yet. Click to go back.</a>`;
