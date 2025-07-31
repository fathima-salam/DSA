function strReverse(str){
    let splittedStr = str.split(" ");
    let stack = [];
    for(let i in splittedStr){
        stack.push(splittedStr[i]);
    }
    console.log(stack);
    let result = "";
    while(stack.length){
        let value = stack.pop();
        result += ` ${value}`;
    }

    return result;
}

console.log(strReverse("My name is fathima"));