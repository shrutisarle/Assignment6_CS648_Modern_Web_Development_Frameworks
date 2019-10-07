/*eslint-env browser*/

var coinFlip = Math.random();
var choice;

choice = (window.prompt("Choose Heads or Tails !! (Please type Heads/Tails)"));

if (Math.random() > coinFlip) {

    var result = "Heads";
} else {
    var result = "Tails";
}

if (choice == "Heads") {
    if (result == "Heads") {

        document.write("The flip was heads and you chose heads...you win!");
    } else {
        window.document.write("The flip was heads but you chose tails...you lose!");
    }
}

if (choice == "Tails") {
    if (result == "Tails") {

        window.document.write("The flip was tails and you chose tails...you win!");
    } else {
        window.document.write("The flip was tails but you chose heads...you lose!");
    }
}