let random = Math.floor(Math.random() * 100 + 1);
const userinput = document.getElementById("userinput");
const submit = document.querySelector("button");
const prev = document.getElementById("previous-guess");
const remaining = document.getElementById("remaining");
const displayblock = document.getElementById("display-block");
const startagain = document.getElementById("restart");

let count = 1;

let play = true;

if (play) {
  submit.addEventListener("click", function (e) {
    validate(parseInt(userinput.value));
  });
}

function validate(ui) {
  userinput.value = "";
  if (ui === "" || isNaN(ui)) {
    display("please enter a valid number");
  } else if (ui > 100 || ui < 1) {
    display("please enter a number between 1 to 100");
  } else {
    if (count === 10) {
      display(
        `You used all your attemps, the random number was ${random}!! better luck next time!!`
      );
      endgame();
    } else {
      check(ui);
    }
  }
}
function check(guess) {
  console.log(guess);
  console.log(random);
  if (random === guess) {
    display(`You Won, Guessed the correct number ${guess}`);
    endgame();
  } else {
    count++;
    remaining.innerHTML = `${11 - count}`;
    prev.innerHTML += `${guess} `;
    console.log(prev);
    display("Try Again...");
  }
}
function display(message) {
  const display = document.getElementById("display");
  display.innerHTML = message;
}
function endgame() {
  play = false;
  displayblock.style.display = "none";
  submit.setAttribute("disabled", "");
  const newgame = document.createElement("button");
  newgame.id = "newgame";
  newgame.innerHTML = "<h3>Play Again</h3>";
  startagain.appendChild(newgame);
  newgame.addEventListener("click", function (e) {
    restartgame();
  });
}
function restartgame() {
  const but = document.getElementById("newgame");
  startagain.removeChild(but);

  displayblock.style.display = "block";
  userinput.innerHTML = "";
  count = 1;
  remaining.innerHTML = `${11 - count}`;
  prev.innerHTML = "";
  display("");
  rendom = Math.floor(Math.random() * 100 + 1);
  submit.removeAttribute("disabled");
  play = true;
}
