// Object with type annotations
const user: { name: string; age: number; location: string } = {
    name: "Om",
    age: 22,
    location: "USA",
};
console.log(user);

// Function returning an object
function getUser(): { name: string; age: number; location: string } {
    return { name: "Om", age: 22, location: "USA" };
}
console.log(getUser());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Object Type Annotation
const user1: {
    name: string;
    age: number;
    email?: string; // Optional property
} = {
    name: "Alice",
    age: 28
};

// Nested Objects
const book: {
    title: string;
    author: {
        name: string;
        nationality: string;
    }
} = {
    title: "TS Guide",
    author: {
        name: "John",
        nationality: "US"
    }
};
