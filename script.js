var txt=document.getElementById("textIndex");
 var txt1=document.getElementById("textIndex1");
 var teste=document.getElementById("tester");
  function test(){
    console.log(txt+txt1)
    txt.classList.toggle("opened")
    txt1.classList.toggle("opened")

  }



const colors = ["red", "blue", "yellow", "white"];
const colors1 = ["rouge", "bleu", "jaune", "blanc"];
var colorIndex = Math.floor(Math.random() * 4);
var cc = (document.getElementById("color").innerHTML = colors1[colorIndex]);
var colorIndex1 = Math.floor(Math.random() * 4);
document.getElementById("color").style.color = colors[colorIndex1];

var Score = 0;
var newScore = 0;
var isNotClicked = 0;
var t = 2;
var myTimeout = setTimeout(counterEnds, 1000);

function counterEnds() {
  if (t > 0 && isNotClicked != 1) {
    t = t - 1;
    document.getElementById("counter").innerHTML = t;
    setTimeout(counterEnds, 1000);
  } else if (isNotClicked == 1) {
    document.getElementById("btn1").style.visibility = "hidden";
  } else {
    document.getElementById("btn1").style.visibility = "visible";
  }
}

function rejouerPlusRapide() {
  if (Score > newScore) {
    newScore = Score;
  } else {
    newScore = newScore;
  }
  document.getElementById("scoreT").innerHTML = newScore;
  document.getElementById("btn1").style.visibility = "hidden";
  document.getElementById("score").innerHTML = 0;
  Score = 0;
  changeColor();
  t = 2;
  counterEnds();
}

function rejouer() {
  document.getElementById("btn").style.visibility = "hidden";
  document.getElementById("score").innerHTML = 0;
  Score = 0;
  changeColor();
  isNotClicked = 0;
  t = 2;
  counterEnds();
}
function changeColor() {
  colorIndex = Math.floor(Math.random() * 4);
  cc = document.getElementById("color").innerHTML = colors1[colorIndex];
  colorIndex1 = Math.floor(Math.random() * 4);
  document.getElementById("color").style.color = colors[colorIndex1];
}

function clickedRed() {
  if (cc == "rouge") {
    changeColor();
    Score++;
    document.getElementById("score").innerHTML = Score;
    t = 2;
  } else {
    if (Score > newScore) {
      newScore = Score;
    } else {
      newScore = newScore;
    }
    document.getElementById("scoreT").innerHTML = newScore;

    Score = 0;
    document.getElementById("btn").style.visibility = "visible";
    changeColor();
    isNotClicked = 1;
  }
}

function clickedBlue() {
  if (cc == "bleu") {
    changeColor();
    Score++;
    document.getElementById("score").innerHTML = Score;
    t = 2;
  } else {
    if (Score > newScore) {
      newScore = Score;
    } else {
      newScore = newScore;
    }
    document.getElementById("scoreT").innerHTML = newScore;
    Score = 0;
    document.getElementById("btn").style.visibility = "visible";
    changeColor();
    isNotClicked = 1;
  }
}
function clickedYellow() {
  if (cc == "jaune") {
    changeColor();
    Score++;
    document.getElementById("score").innerHTML = Score;
    t = 2;
  } else {
    if (Score > newScore) {
      newScore = Score;
    } else {
      newScore = newScore;
    }
    document.getElementById("scoreT").innerHTML = newScore;
    Score = 0;
    document.getElementById("btn").style.visibility = "visible";
    changeColor();
    isNotClicked = 1;
  }
}
function clickedWhite() {
  if (cc == "blanc") {
    changeColor();
    Score++;
    document.getElementById("score").innerHTML = Score;
    t = 2;
  } else {
    if (Score > newScore) {
      newScore = Score;
    } else {
      newScore = newScore;
    }
    document.getElementById("scoreT").innerHTML = newScore;
    Score = 0;
    document.getElementById("btn").style.visibility = "visible";
    changeColor();
    isNotClicked = 1;
  }
}

function reintialiser() {
  window.location.reload();
}
function continuer() {
  document.getElementById("score").innerHTML = Score;
  document.getElementById("scoreT").innerHTML = Score;
}
