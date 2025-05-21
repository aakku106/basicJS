/** @format */
length = 8;
mid = length / 2;
for (i = 0; i < mid; i++) {
  let row = "         ";
  for (j = length; j >= i; j--) {
    row += " ";
  }
  for (k = 0; k < i; k++) {
    row += " *";
  }
  console.log(row);
}

for (i = 0; i < mid; i++) {
  let row = "         ";
  for (j = length; j >= i; j--) {
    row += " ";
  }
  for (k = 0; k < i; k++) {
    row += " *";
  }
  console.log(row);
}
