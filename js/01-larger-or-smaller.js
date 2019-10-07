/*eslint-env browser*/
/*
Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two
within the browser window. Don’t forget to handle the fact that the two could be equal.
*/

var first = parseInt(window.prompt("Please enter an integer: "));
var second = parseInt(window.prompt("Please enter another integer: "));

if (first > second) {
  document.write(first);
}
else if (first < second) {
  document.write(second);
}
else {
  document.write("Both are equal");
}
