// Regular function
function addOne(num: number): number {
    return num + 1;
}
console.log(addOne(3));

// Arrow function
const double = (x: number, y: number): number => x * y;
console.log(double(3, 10));

// Default parameter
function greet(person: string = "Anonymous"): string {
    return `Hello, ${person}`;
}
console.log(greet("Om"));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Typed Parameters & Return Values
function add(a: number, b: number): number {
    return a + b;
}

// Arrow Function with Type
const greet1 = (name: string): string => `Hello ${name}`;

// Optional Parameters
function multiply(a: number, b?: number): number {
    return b ? a * b : a;
}