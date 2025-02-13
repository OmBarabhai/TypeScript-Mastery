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
