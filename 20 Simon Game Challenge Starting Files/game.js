var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStart = false;

var level = 0;

$(document).keydown(function () {
    if (!gameStart) {
        $("h1").text("Level " + level);
        nextSequence();
        gameStart = true;
    }
});

$(".btn").click(function (event) {
    if (!gameStart) {
        startOver();
    } else {
        var userChosenColour = event.target.id;
        userClickedPattern.push(userChosenColour);
        animatePress(userChosenColour);
        playSound(userChosenColour);
        checkAnswer(userClickedPattern.length - 1);
    }
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("." + randomChosenColour)
        .fadeOut(100)
        .fadeIn(100)
        .fadeOut(100)
        .fadeIn(100);

    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        startOver();
    }
}

function startOver() {
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setInterval(function () {
        $("body").removeClass("game-over");
    }, 200);

    gamePattern = [];
    userClickedPattern = [];
    gameStart = false;
    level = 0;
}
