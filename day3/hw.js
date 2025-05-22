/** @format */

// Display a menu using a switch statement:

// 1: Check Balance

// 2: Deposit Money

// 3: Withdraw Money

// 4: Exit

// Use a do-while loop to repeat the menu until the user selects exit.

// Use a for loop to simulate transaction history print last 5 transactions as dummy data.
var input;
var amount = 0;
var withdraw;
var deposit;
var transactionHistory = [];
do {
  amount;
  input = parseInt(
    prompt(
      " 1. Check balance\n\n 2. Deposit \n\n 3. Withdraw Money\n\n 4. Exit\n\n"
    )
  );
  switch (input) {
    case 1:
      transactionHistory.unshift({
        type: "Check Balance",
        totalAmount: amount,
        date: new Date().toLocaleTimeString(),
      });
      break;
    case 2:
      deposit = parseFloat(prompt("\nEnter amount to Deposit\n"));
      transactionHistory.unshift({
        type: "Check Balance",
        totalAmount: deposit,
        date: new Date().toLocaleTimeString(),
      });
      amount += deposit;
      alert(" Rs." + deposit + " is deposited");
      break;
    case 3:
      withdraw = parseFloat(prompt("\nEnter amount to Withdraw\n"));
      if (withdraw < amount) {
        transactionHistory.unshift({
          type: "Check Balance",
          totalAmount: "-" + withdraw,
          date: new Date().toLocaleTimeString(),
        });
        amount -= withdraw;
        alert(" Rs." + withdraw + " is withdrawn");
      } else {
        alert("thar's no Rs." + withdraw + " in your account");
      }
      break;
  }
} while (input !== 4);

console.log(transactionHistory);

document.getElementById("transictionHistory").innerHTML =
  "<pre>" + JSON.stringify(transactionHistory, null, 2) + "</pre>";
