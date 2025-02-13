// //String

import { log } from "console"

// let myName: string = "Om";
// myName = "something other person";
// console.log(myName);

// //Numbers
// let favNum: number = 8;
// console.log(favNum);

// //Boolean
// let tsHard: boolean = false;
// console.log(tsHard);

// let color: any = "crimson";
// color = 20;
// color = true;
// //color()
// console.log(color);

//Regular func 
// function addOne(num: number){
//     return num + 1;
// }

// // const res = addOne(3);
// // console.log(res);

// //Arrow func
// const double = (x: number, y: number) => x * y
// const res = double(3, 10);
// console.log(res);

// function greet(person: string = "Anonoymous"){
//     return `Hello ${person}`
// }

// const res = greet("Om")
// console.log(res);

// Regular func 
// function double1(x: number): number{
//     return x * x;
// }

// const res = double1(2)
// console.log(res);

// Arrow func
// const double2=(x: number): number => x * x;
// console.log(double2(2));

// function printMessage(message:string):void {
//     console.log(`This is my ${message}`);
// }
// printMessage("message");

// function throwError(msg:string): never{
//     throw new Error(msg)
// }

// function infiniteLoop(): never{
//     while(true){ }
// }

// let x: never;
// function neverReturns(): never{
//     while(true){}
// }

// x = neverReturns();

// const numbers: number[] = [1, 2, 6, 4];
// const str: string[] = ['one', 'two', 'three']
// console.log(str);

// const items: string[] = [];
// items.push("Keyboard");
// // items.push(12);
// console.log(items);

// const numList : number[] = [];
// numList.push(20);
// // numList.push(true);
// console.log(numList);

// const items: Array<number> = ['something', true, {}, 7]
// console.log(items);

// const singleDi : number[] = [1, 2, 3, 4, 5]
// const multiDi: number[][] = [[1,2,3,4,5,]]
// const triple: number[][][] = [[[1, 2, 3, 5]]]

// console.log(singleDi);
// console.log(multiDi);
// console.log(triple);



// const printUser: {name: string; age: number; location: string} = {
//     name: "Om",
//     // age:19,
//     location:"USA",
// };

// console.log(`name: ${printUser.name}, name: ${printUser.location}, age: ${printUser.age}`);

// ---------------------------------------------------------------------------------------------------
//using object as function return value

// function printUser(): {name: string; age: number; location: string}{
// return{
//     name: "Om",
//     age:19,
//     location:"USA",
//   };
// }
// const res = printUser();
// console.log(res));