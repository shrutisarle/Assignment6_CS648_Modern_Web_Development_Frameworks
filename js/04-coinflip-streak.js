/*eslint-env browser*/

var coinFlip;

do {
    coinFlip = Math.random();
    var result = Math.round(coinFlip);

    var decision;
    if (result == 0) {
        decision = "Heads";
        window.document.write("Heads <br> <br>");
    } else {
        decision = "Tails";
        window.document.write("Tails <br> <br>");
    }


} while (decision == "Heads")