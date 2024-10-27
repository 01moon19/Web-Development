// // // // // // //function definition
// // // // // // function sayMyName() {
// // // // // //     console.log("Mayank Singh")
// // // // // // }

// // // // // // //function call
// // // // // // sayMyName();

// // // // // function printCounting(){
// // // // //     for(let i=0;i<10;i++){
// // // // //         console.log(i);
// // // // //     }
// // // // // }
// // // // // printCounting();

// // // // function printNumber(num){
// // // //     console.log(num);
// // // // }

// // // // printNumber(10);

// // // function getAvrage(num1, num2){
// // //     let avg = (num1 + num2)/2;
// // //     console.log(avg);
// // // }
// // // getAvrage(10, 20);

// // //return functions

// // function getSum(a,b,c){
// //     let sum = a+b+c;
// //     return sum;
// // }
// // let result = getSum(10,20,30);
// // console.log(result);

// function getMyNmae(firstName, lastName){
//     let myName = firstName + " " + lastName;
//     return myName;
//     //unreachable statements
//     let a = 10;
//     let b = 5;
//     let sum = a+ b;
//     console.log(sum)
// }
// let Name = getMyNmae("Mayank", "Singh");
// console.log(Name);

// function getMultiplication(a,b){
//     return a*b;

// }
// console.log(getMultiplication(2,10))

// let getMultiplication = function(a,b){
//     return a*b;
// }
// console.log(getMultiplication(2,10));

//ARROW FUNCTIONS
let getExp = (x,y) => {
    let ans = x**y;
    return ans;
}
console.log(getExp(2,3));