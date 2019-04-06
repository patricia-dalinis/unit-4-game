$(document).ready(function() {
    var random = Math.floor(Math.random() * ((120 - 19) + 1)) + 19;
    console.log("Random Number", random);
    $("#randomNumber").text(random);

    
});