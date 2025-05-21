/** @format */

days = parseInt(prompt("Enter number of week"));
time = parseInt(prompt("Enter time in 24 hour format"));

if (time < 23 && time > 12) {
  greet = "Murning";
} else if (time > 11 && time < 16) {
  greet = "after nun";
} else if (time > 15 && time < 21) {
  greet = "Evining";
} else if (time > 20 && time < 0) {
  greet = "night";
}

switch (days) {
  case 1:
    console.log("sun\t", greet);
    break;
  case 2:
    console.log("mon\t", greet);
    break;
  case 3:
    console.log("tus\t", greet);
    break;
  case 4:
    console.log("wed\t", greet);
    break;
  case 5:
    console.log("thu\t", greet);
    break;
  case 6:
    console.log("fry\t", greet);
    break;
  case 7:
    console.log("sat\t", greet);
    break;
  default:
    alert("Thats not a week");
}
