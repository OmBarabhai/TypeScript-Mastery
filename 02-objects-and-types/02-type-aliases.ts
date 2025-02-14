/*
========================
 Type Aliases in TypeScript
========================
A type alias allows you to define a custom name for an existing type, making your code more readable and reusable.
*/

// Basic Type Alias
// This creates an alias for the string type

type MyString = string;
const message: MyString = "Hello, TypeScript!";
console.log(message);

/*
========================
 Object Type Alias
========================
Using a type alias to define a reusable object structure.
*/

type Person = {
  name: string;
  age: number;
};

function printPerson(person: Person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const myPerson: Person = { name: "Alice", age: 25 };
printPerson(myPerson);

/*
========================
 Type Alias for Function Return Types
========================
You can use type aliases to define function return types for better clarity.
*/

type User = {
  name: string;
  age: number;
  location: string;
};

function getUser(): User {
  return {
    name: "Alex",
    age: 19,
    location: "USA",
  };
}

console.log(getUser());

/*
========================
 Type Alias for Union Types
========================
A type alias can also be used to create union types.
*/

type ID = string | number;

let userId: ID = 101;
console.log(userId);
userId = "abc123"; // This is also valid
console.log(userId);

/*
========================
 Why Use Type Aliases?
========================
✔ Improves code readability
✔ Makes object structures reusable
✔ Reduces duplication
✔ Helps with TypeScript’s static typing benefits
*/


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

type User1 = {
    name: string;
    age:number;
    location:string;
    

};

const printUserInfo = (user: User1)=>{
    return `Name: (${user.name}) Age:(${user.age}) Location:(${user.location})`
};

const res = printUserInfo({name: "Alex", age:20, location:"USA"})
console.log(res);

//---------------------------------------------------------------------------------

type User2 = {
    name: string;
    age?:number;
    readonly location:string;

};


const user:User2 = {
    name:"Om",
    location:"india",
};

// user.location = 'something'

console.log(`Name: ${user.name}, Age:${user.age}, Location: ${user.location}`);

//-------------------------------------------------------

type UserInfo = {
    first: string;
    last:string;
    age:number
}

type AccountDetails = {
    email: string;
    password: string;

}

type User3 = UserInfo & AccountDetails
const Om: User3 = {
    first:"Om",
    last:"WebDev",
    age:22,
    email:"Om@gmail.com",
    password:"pass123",

}

console.log(`Name: ${Om.first} ${Om.last} Age: ${Om.age} Email: ${Om.email} Password: ${Om.password}`);
 