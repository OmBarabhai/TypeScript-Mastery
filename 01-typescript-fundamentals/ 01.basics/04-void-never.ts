// Void function (no return value)
function printMessage(message: string): void {
    console.log(`This is my ${message}`);
}
printMessage("message");

// Never function (throws error or infinite loop)
function throwError(msg: string): never {
    throw new Error(msg);
}
