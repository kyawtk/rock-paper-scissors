const playerScore = document.querySelector(".player-score h1");
const comScore = document.querySelector(".com-score h1");



const choices = document.querySelectorAll(".choice");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");


const result = document.querySelector('.result')
pimg = document.querySelector('.pchoice img')
comimg = document.querySelector('.comchoice img')
let comPoints = 0;
let playerPoints = 0;

function addComPoint() {
  comPoints++;
}
function addPlayerPoint() {
  playerPoints++;
}
function decideWinner(c, p) {
  if (c == p) {
      //calldraw()
  }
  else if ((c - p + 3) % 3 == 1){
      addPlayerPoint()
      playerScore.innerHTML = playerPoints;
  }
  else {
      addComPoint();
      comScore.innerText = comPoints;
  }
}
function showchoice(player , com){
    pimg.src=`./img/${player}.png`
    comimg.src=`./img/${com}.png`
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    let pchoice = parseInt(e.target.dataset.choice ,10);
    let comchoice =Math.floor(Math.random() * (4 - 1) ) + 1;
    decideWinner(comchoice,pchoice );
    console.log(pchoice,comchoice)
    showchoice(pchoice, comchoice)
  });
});
