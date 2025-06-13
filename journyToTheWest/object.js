/** @format */
const same = "same";
const person = {
  name: "aakku",
  age: 16,
  grade: 8,
  address: "ur heart❤️💜",
  same,
};
const { name, age, grade, address } = person;
console.log(name, same);
const person2 = { ...person, name: "ccn" };
console.log(person2.name, age);
