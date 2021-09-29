/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let websiteTypes = ["com", "gov", "net", "col", "ru"];
const enteredWords = new Array();

function websiteGenerator() {
  const browserNames = [];
  let browserName = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < websiteTypes.length; l++) {
          browserName = pronoun[i] + adj[j] + noun[k] + "." + websiteTypes[l];
          browserNames.push(browserName);
        }
      }
    }
  }

  return browserNames;
}

function isAlreadyThere(array, word) {
  let isAlready = false;
  for (let j = 0; j < array.length; j++) {
    if (word.toUpperCase() == array[j].toUpperCase()) isAlready = true;
  }

  return isAlready;
}

let paragraphStyle = "text-center text-uppercase fs-6 fw-bold font-monospace";

function setSentencesInHtml() {
  let allSites = websiteGenerator();
  let counter = 0;
  for (let i = 0; i < allSites.length; i++) {
    counter++;
    document.getElementById("firstRow").innerHTML +=
      "<div class=" +
      "col-2><p class=" +
      '"' +
      paragraphStyle +
      '"' +
      ">" +
      allSites[i] +
      "</p></div>";
  }
}

function resetInputValues() {
  document.getElementById("inputWord").value = "";
  document.getElementsByName("myWordsList")[0].value = "";
}

function populateArrayOfNewWordsEntered(valueInput) {
  if (valueInput.length > 0) enteredWords.push(valueInput);
}

function populateSentencesWithNewInput(valueInput, keyInput) {
  if (valueInput.length > 0) {
    switch (keyInput) {
      case "Prounoun":
        if (!isAlreadyThere(pronoun, valueInput)) pronoun.push(valueInput);
        break;
      case "Adjective":
        if (!isAlreadyThere(adj, valueInput)) adj.push(valueInput);
        break;
      case "Noun":
        if (!isAlreadyThere(noun, valueInput)) noun.push(valueInput);
        break;
      case "WebsiteType":
        if (!isAlreadyThere(websiteTypes, valueInput))
          websiteTypes.push(valueInput);
        break;
    }
  }
}

const btn = document.getElementById("b1");

btn.onclick = function() {
  let valueInput = document.getElementById("inputWord").value;
  let keyInput = document.getElementsByName("myWordsList")[0].value;

  populateArrayOfNewWordsEntered(valueInput);
  populateSentencesWithNewInput(valueInput, keyInput);

  resetInputValues();
  setSentencesInHtml();
};
