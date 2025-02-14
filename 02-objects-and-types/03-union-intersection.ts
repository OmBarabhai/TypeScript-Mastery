let password: string | number =  20

type UserInfo = {
    first: string;
    last: string;
    age: number;
}

type AccountDetails = {
    email: string;
    // last: string;
    // age: number;
    password: string;
}

let user: UserInfo | AccountDetails = {
    // first:"Om",
    // last:"WebDev",
    // age:22,
    email:'Om@gmail.com',
    password:'password12'
    
}

const items: (number | string)[]=[ 1, 3, 7,"hello", true]

console.log(items);
