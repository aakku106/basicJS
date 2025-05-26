/** @format */

//=======================OBJECT in JS===================//
let object = {};
let new_obj = new Object();
object.name = "ccn";
object.age = 18;
object.salary = 1069;
console.log(object);

new_obj.name = "aakku";
new_obj.age = 16;
new_obj.salary = 106;
console.log(new_obj);

let person = {
  fn: "adarasha",
  ln: "gaihre",
  age: 16,
};
let text = Object.entries(person);
let keys = Object.keys(person);
let values = Object.values(person);
console.log(text);
console.log(keys);
console.log(values);
var show = "";
loop = () => {
  for (i in person) {
    show = `\n\nMy first name is ${person.fn} & sur name is ${person.ln}. my age is ${person.age}.\n\n`;
  }
};
loop();
console.log(show);
