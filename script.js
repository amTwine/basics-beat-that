//generate ramdom#
var generateDiceNumber = function () {
  var diceNumber = Math.ceil(Math.random() * 6);
  return diceNumber();
};

// main function
var main = function (input) {
  var randomDiceRoll = diceNumber();
  var randomDiceRoll2 = diceNumber();
  console.log(
    "random dice 1 " + randomDiceRoll,
    "random dice 2 " + randomDiceRoll2
  );
  var myOutputValue = "";
};
// output: player playing, dice rolls for player
