/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  location.reload();
});

let generateRandomNumber = () => {
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};

function generateCard() {
  const cardNumber = generateRandomNumber();
  const cardSuit = generateRandomSuit();
  let entity =
    cardSuit === "Diamonds"
      ? (entity = "&diams;")
      : (entity = "&" + cardSuit.toLowerCase() + ";");

  let card = document.createElement("div");
  card.classList.add("card", cardSuit.toLowerCase());
  card.innerHTML =
    `<span class="card-suit top"> ${entity}</span>` +
    `<span class="card-number"> ${cardNumber}</span>` +
    `<span class="card-suit bot"> ${entity}</span>`;

  document.body.appendChild(card);
}

generateCard();
