var defenestrate = $("input[name='defenestrate']").val();
var hysteria = $("input[name='hysteria']").val();
var cannibal = $("input[name='cannibal']").val();


var checked = {
    defenestrate: defenestrate,
    hysteria: hysteria,
    cannibal: cannibal
}

$(".source").hide();

$(".btn").click(function() {

    var score = 0;

    var data = (Object.values(checked));
    console.log(data);

    for (var i = 0; i < data.length; i++) {
        if(data[i] == "correct") {
            score++;
        }
    }

    console.log();

    $(".source").show();

    var scoreBox = $("<div>");
    $(scoreBox).text("You answered " + score + " out of 3 questions correctly.");
    $("#game").append(scoreBox);

});

