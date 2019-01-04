var defenestrate = $("input[name='defenestrate']").val();
var hysteria = $("input[name='hysteria']").val();
var cannibal = $("input[name='cannibal']").val();


var checked = {
    defenestrate: defenestrate,
    hysteria: hysteria,
    cannibal: cannibal
}

$(".source").hide();

var timeCounter = 5;
var counterBox = $("#counter");
counterBox.text("You have " + timeCounter + " seconds left.");



var timer = setInterval(countdown, 5000);

var score = 0;
var scoreBox = $("<div>");
$("#game").append(scoreBox);

function countdown() {
    timeCounter--;
    counterBox.text("You have " + timeCounter + " seconds left.");

    if (timeCounter == 0) {
        alert("Sorry, you ran out of time. You got " + score + " out of 3 correct.");
        clearInterval(countdown);
        counterBox.text("You have no time left.");
    } else if(timeCounter <= 0) {
        counterBox.text("You have no time left.");
    }
}

var data = (Object.values(checked));

    for (var i = 0; i < data.length; i++) {
        if(data[i] == "correct") {
            score++;
        }
    }

$("#btn").click(function() {

    timeCounter = "done";
    clearInterval(countdown);
    $("#counter").hide();

    $(".source").show();

    
    $(scoreBox).text("You answered " + score + " out of 3 questions correctly.");
    

});

