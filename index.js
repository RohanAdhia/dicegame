function randomNumberGen() {
  var a = Math.random() * 6;
  return "images/dice"+(Math.floor(a) + 1)+".png";
}

document.getElementsByTagName("img")[0].setAttribute("src",randomNumberGen());
document.getElementsByTagName("img")[1].setAttribute("src",randomNumberGen());

var player1 = document.getElementsByTagName("img")[0].getAttribute("src").slice(11,12);
var player2 = document.getElementsByTagName("img")[1].getAttribute("src").slice(11,12);

if (player1 > player2) {
  document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
} else if (player1 === player2){
  document.querySelector("h1").innerText = "Draw!";
} else {
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}
