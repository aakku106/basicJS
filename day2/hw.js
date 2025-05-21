/** @format */

input = prompt("Enter between A B C D F").toUpperCase();

// input = 'A';
switch (input) {
  case "A":
    alert("Excellent");
    break;
  case "B":
    alert("Good");
    break;
  case "C":
    alert("Average");
    break;
  case "D":
    alert("poor");
    break;
  case "F":
    alert("Fail");
    break;
  default:
    alert("Pls give valid Input");
    break;
}

console.log(typeof input);
console.log(input);
