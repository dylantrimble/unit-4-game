$("document").ready(function () {

    console.log("ready to go!")



    var targetNumber = 0;
    var crystalValue = "";
    var numberOfWins = 0;
    var numberOfLosses = 0;
    var score = 0;

    function startGame() {

        score = 0;

        $("#score").text(score);

        targetNumber = Math.floor((Math.random() * 100) + 20);

        $("#randomNumber").text(targetNumber);

        $(".cage").each(function(idx, element){
            $(element).attr("data-crystalvalue", Math.floor((Math.random() * 12) + 1));
            crystalValue = element
            console.log(crystalValue)
        });
        

        console.log(crystalValue);
    }
    startGame()


    $(".cage").on("click", function () {

        crystalValue = parseInt($(this).attr("data-crystalvalue"));

        score += crystalValue

        $("#score").text(score);

        if (score === targetNumber) {

            $("#status").text("You Win!!");

            numberOfWins++;

            $("#wins").text("wins: " + numberOfWins);

            startGame();

        }

        else if (score >= targetNumber) {
            $("#status").text("You Loose!!")

            numberOfLosses++;

            $("#losses").text("Losses: " + numberOfLosses);

            startGame();
        }



    });





});