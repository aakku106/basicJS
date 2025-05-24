/** @format */

//Assignment 2: Student Grade Management Assignment
//-------Functions
//• addStudent(name, grade)
//• Adds student's name and grade to respective arrays.
//------ Validations:
//•       Name must not be empty.
//•       Grade must be between 0 and 100 (inclusive).
//• calculateAverage(grades)
//  • Calculates and returns the average of grades using a loop.
//• determineClassPerformance(average)
//
//• Returns class performance based on the average:
//• "A" for ≥ 90
//• "B" for 80-89
//• "C" for 70-79
//• "D" for 60-69
//• "F" for < 60
//Loops
//• Use loops to:
//• Sum grades for the average calculation.
//Print each student's name and corresponding grade.

DummyArray = [
  {
    name: "ccn",
    grade: 100,
  },
  {
    name: "aakku",
    grade: 60,
  },
  {
    name: "Adarasha Gaihre",
    grade: 30,
  },
  {
    name: "kitli Gaire",
    grade: 30,
  },
  { name: "toffuz", grade: 70 },
];

var error = "",
  output = "",
  sum = 0,
  average = 0;
addGrade = () => {
  let stdName = prompt("Enter the name of Student");
  let stdGrade = parseInt(prompt("Enter the Grade of Student"));
  add_student(stdName, stdGrade);
  updateUi();
};

add_student = (name, grade) => {
  if (name.length > 0 && grade >= 0 && grade <= 100) {
    DummyArray.push({ name: name, grade: grade });
    error = "";
  } else
    error = `Name cannot be empty and Grade shall be from 0 to 100, but you gave name: ${name}, grade: ${grade}`;
};

calculate_average = () => {
  sum = 0;
  DummyArray.forEach((i) => {
    sum += i.grade;
  });
  return (average = sum / DummyArray.length);
};

class_perfomance = (average) => {
  if (average >= 90) return "A";
  else if (average >= 80 && average <= 89) return "B";
  else if (average >= 70 && average <= 79) return "C";
  else if (average >= 60 && average <= 69) return "D";
  else if (average <= 60) return "F";
  else return "SUS";
};
updateUi = () => {
  output = `average of ${
    DummyArray.length
  }'s student is ${calculate_average()}.`;
  averageGrade = `Class average grade is ${class_perfomance(average)}.`;

  document.getElementById("throwError").innerHTML = error;
  document.getElementById("showClassAverage").innerHTML = output;
  document.getElementById("showClassAvergeGrade").innerHTML = averageGrade;
  const ccn = document.getElementById("stdDetailsTable");
  DummyArray.forEach((i) => {
    let SN = document.createElement("td")=i;
    let Name = document.createElement("td")=i.name;
    let grade = document.createElement("td")=i.grade;
  });
};
updateUi();
