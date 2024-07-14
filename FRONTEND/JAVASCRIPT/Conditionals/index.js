console.log("Conditionals")

let age = 17;
let grace = 2;

age += grace
console.log(age)
console.log(age + grace)
console.log( age - grace )
console.log( age * grace )
console.log( age / grace )
console.log( age ** grace )//exponential
console.log( age % grace )

if( age>17 ){
    console.log("you can drive");
}

else{
    console.log("you cannot drive");
}

let a = 6;
let b = 8;
let c = a>b?(a-b):(b-a);//ternary operator