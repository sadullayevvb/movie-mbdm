const $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

const $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
}

import { movies } from "./movie.js";

const wrapperElement = $_(".wrapper");
const template = $_(".movies-template").content;

const moviesFragment = document.createDocumentFragment();
movies.forEach((movie) => {
  const wrapperClone = template.cloneNode(true);
  $_(".card-title", wrapperClone).textContent = movie.title;
  $_(".card-image", wrapperClone).src = movie.smallThumbnail;
  $_(".card-desc", wrapperClone).textContent = movie.year;
  $_(".runtime", wrapperClone).textContent = movie.runtime;
  $_(".precent", wrapperClone).textContent = movie.runtime;

  $_(".card-bottom", wrapperClone).textContent = movie.categories;

  moviesFragment.appendChild(wrapperClone);
});

wrapperElement.appendChild(moviesFragment);
