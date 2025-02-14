// Any Type - Can store any value
let color: any = "crimson";
color = 20;  // Valid
color = true;  // Valid
console.log(color);

//+++++++++++++++++++++++++++++++++++++++++

// Any Type (Opt-out of type checking)
let flexible: any = "Hello";
flexible = 42;
flexible = true;

// Use Cases
const userInput: any = document.getElementById('input');