let total1 = 0;
let total2 = 0;
let x = 0;

function rollDice1() {
  x = Math.random() * 6 + 1;
  document.querySelector(".digit1").textContent = Math.trunc(x);
  x = Math.trunc(x);

  total1 += x;

  document.querySelector(".total1").textContent = total1;

  let discImg = document.querySelector(".image");
  discImg.src = `./dice/dice${x}.png`;
  

  if (total1 >= 100) {
    document.querySelector(".win").innerHTML = "Player 1 wins Congratulations.";
  }
}
function rollDice2() {
  x = Math.random() * 6 + 1;
  document.querySelector(".digit2").textContent = Math.trunc(x);
  x = Math.trunc(x);

  total2 += x;

  document.querySelector(".total2").textContent = total2;

  let discImg = document.querySelector(".image");
  discImg.src = `./dice/dice${x}.png`;
 

  if (total2 >= 100) {
    document.querySelector(".win").innerHTML = "Player 2 wins Congratulations.";
  }
}
