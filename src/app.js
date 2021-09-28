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

function createPronounAndAdj(finalWebsite) {
  const pronounAndAdj = [];
  let newWord = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        newWord = pronoun[i] + adj[j] + noun[k] + finalWebsite;
        pronounAndAdj.push(newWord);
      }
    }
  }

  return pronounAndAdj;
}

let comSites = createPronounAndAdj(".com");
console.log(comSites);
let netSites = createPronounAndAdj(".net");
let govSites = createPronounAndAdj(".gov");

let allSites = comSites.concat(netSites, govSites);

console.log(allSites);
