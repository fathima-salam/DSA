function reverseStringUsingStack(str) {
    let stack = [];

    // Step 1: Push each character onto the stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    // Step 2: Pop characters to reverse
    let reversed = "";
    while (stack.length > 0) {
        reversed += stack.pop();
    }

    return reversed;
}

console.log(reverseStringUsingStack("fathima salam")); 