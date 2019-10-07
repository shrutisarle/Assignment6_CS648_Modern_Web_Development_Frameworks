/*eslint-env browser*/

var coinFlip;
var i;

for (i = 1; i <= 10; i++) {

    coinFlip = Math.random();
    var result = Math.round(coinFlip);

    if (result == 0) {
        window.document.write("Result of Coin Flip " + i + "th time : Heads <br><br>");
    } else if (result == 1) {
        {
            window.document.write("Result of Coin Flip " + i + "th time : Tails <br><br>");
        }
    }

}