
var gamePattern = [];
var userPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var started = false;
var gameOver = false;
var level = 0;

function animatePress(colorPressed){
    var color = "#" + colorPressed;
    $(color).addClass("pressed")
    setTimeout(function(){
      $(color).removeClass("pressed");
    }, 100);
};

function checkAnswer(currentLevel){
  if(JSON.stringify(gamePattern)==JSON.stringify(userPattern)){
    // your code here
    console.log("Igual");
    setTimeout(function(){ nextSequence(); }, 1000);
    return true;
  }else if(gamePattern.length == userPattern.length){
    console.log("Diferente");
    $('body').addClass("game-over");
    setTimeout(function(){ $('body').removeClass("game-over"); }, 500);
    var audioW = new Audio('./sounds/wrong.mp3');
    audioW.play();
    $("h1").html("Game Over<br/><br/>Click Here to go back to start screen");
    gameOver = true;
    return false;
  }
};

function startOver(){
  level = 0;
  $("h1").text("Press A Key to Start");
  gamePattern.splice(0,userPattern.length);
  started = false;
  gameOver = false;
};

function nextSequence(){
  var randomNumber = Math.random() * 4;
  randomNumber = Math.floor(randomNumber);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  animatePress(randomChosenColor);
  var audioRed = new Audio('./sounds/red.mp3');
  audioRed.play();
  level++;
  $("h1").text("Level " + level);
  userPattern.splice(0,userPattern.length);
  console.log(gamePattern);
};

$("h1").on("click", function(){
  if(gameOver){
    startOver();
  };
});

$("body").on("keypress", function(event){
  if(level == 0){
    nextSequence();
  };
});

$("#red").on("click", function(){
  $("#red").fadeOut(100).fadeIn(100);
  var audioRed = new Audio('./sounds/red.mp3');
  audioRed.play();
  userPattern.push("red");
  animatePress("red");
  checkAnswer(userPattern.length);
  console.log(userPattern);
});

$("#green").on("click", function(){
  $("#green").fadeOut(100).fadeIn(100);
  var audioGreen = new Audio('./sounds/green.mp3');
  audioGreen.play();
  userPattern.push("green");
  animatePress("green");
  checkAnswer(userPattern.length);
  console.log(userPattern);
});

$("#blue").on("click", function(){
  $("#blue").fadeOut(100).fadeIn(100);
  var audioBlue = new Audio('./sounds/blue.mp3');
  audioBlue.play();
  userPattern.push("blue");
  animatePress("blue");
  checkAnswer(userPattern.length);
  console.log(userPattern);
});

$("#yellow").on("click", function(){
  $("#yellow").fadeOut(100).fadeIn(100);
  var audioYellow = new Audio('./sounds/yellow.mp3');
  audioYellow.play();
  userPattern.push("yellow");
  animatePress("yellow");
  checkAnswer(userPattern.length);
});
