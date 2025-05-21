/** @format */

// if ,else if, else, for , while, do while, switch case
x = parseInt(prompt("Enter 1st num"));
y = parseInt(prompt("Enter 2nd num"));
z = parseInt(prompt("Enter 3rd num"));

if ((x > y && y > z) || (x > z && z > y)) {
  console.log("x is greatest");
  if (y > z) {
    console.log("y is 2nd greatest");
  } else {
    console.log("z is 2nd greatest");
  }
} else if ((y > z && z > x) || (y > x && x > z)) {
  console.log("y is greatest");
  if (x > z) {
    console.log("x is 2nd greatest");
  } else {
    console.log("z is 2nd greatest");
  }
} else if ((z > x && x > y) || (z > x && x > y)) {
  console.log("z is greatest");
  if (y > x) {
    console.log("y is 2nd greatest");
  } else {
    console.log("x is 2nd greatest");
  }
}
