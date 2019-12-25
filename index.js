function randomNumberGen() {
  var a = Math.random() * 6;
  return "images/dice" + (Math.floor(a) + 1) + ".png";
}


function diceProcess() {

  document.getElementsByTagName("img")[0].setAttribute("src", randomNumberGen());
  document.getElementsByTagName("img")[1].setAttribute("src", randomNumberGen());

  var player1 = document.getElementsByTagName("img")[0].getAttribute("src").slice(11, 12);
  var player2 = document.getElementsByTagName("img")[1].getAttribute("src").slice(11, 12);

  if (player1 > player2) {
    var b = document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
    return b;
  } else if (player1 === player2) {
    var c = document.querySelector("h1").innerText = "Draw!";
    return c;
  } else {
    var d = document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
    return d;
  }
}
