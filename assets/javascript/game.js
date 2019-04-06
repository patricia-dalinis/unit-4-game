$(document).ready(function() {
    var random = Math.floor(Math.random() * ((120 - 19) + 1)) + 19;
    console.log("Random Number", random);
    $("#randomNumber").text(random);

    var gem1 = Math.floor(Math.random() * ((12 - 1) + 1)) + 1;
    var gem2 = Math.floor(Math.random() * ((12 - 1) + 1)) + 1;
    var gem3 = Math.floor(Math.random() * ((12 - 1) + 1)) + 1;
    var gem4 = Math.floor(Math.random() * ((12 - 1) + 1)) + 1;
    console.log(gem1 , gem2 , gem3 , gem4);

    var userGuess = 0;
    var wins = 0;
    var losses = 0;

    $("#numberOfWins").text(wins);
    $("#numberOfLosses").text(losses);

    function reset() {
        random = Math.floor(Math.random() * ((120 - 19) + 1)) + 19;
        $("#randomNumber").text(random);
        gem1 = Math.floor(Math.random() * ((12 - 1) + 1)) + 1;
        gem2 = Math.floor(Math.random() * ((12 - 1) + 1)) + 1;
        gem3 = Math.floor(Math.random() * ((12 - 1) + 1)) + 1;
        gem4 = Math.floor(Math.random() * ((12 - 1) + 1)) + 1;
        userGuess = 0;
        $("#finalGuess").text(userGuess);
    }

    function win() {
        $("#winOrLose").text("You Won!");
        wins++;
        $("#numberOfWins").text(wins);
        reset();
    }

    function lose() {
        $("#winOrLose").text("You Lost!");
        losses++;
        $("#numberOfLosses").text(losses);
        reset();
    }

    $("#one").on('click', function() {
        userGuess = userGuess + gem1;
        console.log("Guess: " + userGuess);
        $("#finalGuess").text(userGuess);
        if (userGuess == random) {
            win();
        } else if (userGuess > random){
            lose();
        }
    });

    $("#two").on('click', function() {
        userGuess = userGuess + gem2;
        console.log("Guess: " + userGuess);
        $("#finalGuess").text(userGuess);
        if (userGuess == random) {
            win();
        } else if (userGuess > random) {
            lose();
        }
    });

    $("#three").on('click', function() {
        userGuess = userGuess + gem3;
        console.log("Guess: " + userGuess);
        $("#finalGuess").text(userGuess);
        if (userGuess == random) {
            win();
        } else if (userGuess > random) {
            lose();
        }
    });

    $("#four").on('click', function() {
        userGuess = userGuess + gem4;
        console.log("Guess: " + userGuess);
        $("#finalGuess").text(userGuess);
        if (userGuess == random) {
            win();
        } else if (userGuess > random) {
            lose();
        }
    });
});