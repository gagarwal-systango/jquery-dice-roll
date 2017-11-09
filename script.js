var diceValue = {
    'dice1': 6,
    'dice2': 3,
    'dice3': 2,
}
$(function () {
    // Initiate dice
    $("#dice1").dice();
    $("#dice2").dice();
    $("#dice3").dice();

    // Set dice color, size and value
    // default color - white
    var imageUrlForDice23 = 'red.png';

    // default size - 22px
    var diceSize = '22';
    $("#dice1").dice("option", { diceSize: diceSize, diceValue: diceValue.dice1 });
    $("#dice2").dice("option", { diceSize: diceSize, imageUrl: imageUrlForDice23, diceValue: diceValue.dice2 });
    $("#dice3").dice("option", { diceSize: diceSize, imageUrl: imageUrlForDice23, diceValue: diceValue.dice3 });

    $(".row").click(function () {
        $("#dice1").dice("roll", diceValue.dice);
        $("#dice2").children("div").hide();
        $("#dice3").children("div").hide();

        setTimeout(function () {
            $("#dice2").dice("roll", diceValue.dice1);
            $("#dice3").dice("roll", diceValue.dice2);
            $("#dice2").children("div").show();
            $("#dice3").children("div").show();
        }, 1000);
    });
});