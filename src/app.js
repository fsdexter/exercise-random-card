
let generateRandomCard = () => {
  
  let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let randomNum = numberArr[Math.floor(Math.random() * numberArr.length)];
  document.querySelector(".card").innerHTML = randomNum;

  let suitArr = ["heart", "spade", "club", "diamond"];
  let randomSuit = suitArr[Math.floor(Math.random() * suitArr.length)];
  document.querySelector(".card").className = `card ${randomSuit}`;
};

window.onload = function() {
  generateRandomCard()
};

let btn = document.createElement("BUTTON");
btn.innerHTML = "Click me to generate new card";
document.body.appendChild(btn);
btn.addEventListener("click", generateRandomCard);
