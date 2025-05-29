console.log('--------------------------------------')
console.log('--------------------------------------')
function name(){
    var age = 10;
    console.log("age:",age)
    if(106){ // same as if(true){...} 
        var age = 20;
        console.log("age:",age)
    }
    console.log("age:",age)
}

name();
console.log('--------------------------------------')
console.log('--------------------------------------')

function names(){
    let age = 10;
    console.log("age:",age)
    if(106){ // same as if(true){...} 
        let age = 20;
        console.log("age:",age)
    }
    console.log("age:",age)
}
names();

console.log('--------------------------------------')
console.log('--------------------------------------')

// Const decleare garda value assign garnu porxa hehe..


function undefined(){
    let a;
    console.log("a:", a)
    var b;
    console.log("b:", b)
}
undefined();

// ________________________- datatypes in js-----------------------//
    // 1. string
    // 2. number
    // 3. Boolean
    // 4. null
    // 5. Undefined
    // 6. BigInt