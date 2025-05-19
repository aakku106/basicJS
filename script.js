console.log("we we we");
console.log("we we we");
console.log("we we we");
console.log("we we we \n\n");

var catVar= "cat var cat "
let catLet= "cat let cat"
const car= "car"
console.log(catLet, "\n",car,"\n",catVar)


var catVar= "cat var cat "
 catLet= "cat let cat"
//  car= "car"
console.log(catLet, "\n",car,"\n",catVar)

console.log('--------------------------------------')
console.log('a')
var a =3;//Functional scope
{
    var a = 4;
    console.log(a)
}
console.log(a)
// a =000;
console.log(a)
console.log('--------------------------------------')
console.log('b')

const b = 106;
{
    const b = 103;
    console.log(b)
}
console.log(b)
// b = 111
console.log(b)
console.log('--------------------------------------')
console.log('C')

let c = 111;//wouu
{
    let c = 123;
    console.log(c)
}
console.
log(c)
c = 321;
console.log('--------------------------------------')


