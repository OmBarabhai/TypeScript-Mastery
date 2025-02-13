// Object with type annotations
const user: { name: string; age: number; location: string } = {
    name: "Om",
    age: 19,
    location: "USA",
};
console.log(user);

// Function returning an object
function getUser(): { name: string; age: number; location: string } {
    return { name: "Om", age: 19, location: "USA" };
}
console.log(getUser());
