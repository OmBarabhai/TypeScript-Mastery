// Void function (no return value)
function printMessage(message: string): void {
    console.log(`This is my ${message}`);
}
printMessage("message");

// Never function (throws error or infinite loop)
function throwError(msg: string): never {
    throw new Error(msg);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Void Return Type
function logMessage(message: string): void {
    console.log(message);
}

// Never Type (Never returns)
function throwError1(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while(true) {}
}