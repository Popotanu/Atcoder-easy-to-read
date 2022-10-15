// ==UserScript==
// @name         AtCoder easy-to-read statements
// @namespace    atcoder_easy_to_read_statements
// @version      0.1
// @description  Take your pick of a font for question/editorials.
// @author       popotanu
// @match      https://atcoder.jp/contests/*/editorial/*
// @match      https://atcoder.jp/contests/*/tasks/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

"use strict";

const contestMainSelector = () => "#task-statement";
const editorialMainSelector = () => "#main-container .row .col-sm-12:not(#contest-nav-tabs) div";
const mainSelector = (pathname) => {
  const type = pathname.split("/")[3];
  console.log(type);
  switch (type) {
    case "tasks":
      return contestMainSelector();
      break;
    case "editorial":
      return editorialMainSelector();
      break;
    default:
      return "";
      break;
  }
};

const pushFavoriteFontTo = (family, favorite) => {
  return `${favorite} ${family}`;
};

const NAME = `AtCoder easy-to-read statements`;
const FavoriteFont = "BIZ UDPGothic";

(function () {
  window.addEventListener("load", (event) => {
    const pathname = window.location.pathname;
    const mainElement = document.querySelector(mainSelector(pathname));

    if (mainElement == null) {
      console.error(`${NAME}: Can't find selectors for a statement/editorial.`);
      console.error(`${NAME}: So the font-family on this page was not affected.`);
      return;
    }

    const currentFamily = mainElement.style.fontFamily;
    mainElement.style.fontFamily = pushFavoriteFontTo(currentFamily, FavoriteFont);
  });
})();
