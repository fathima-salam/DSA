class Stack{
    constructor(){
        this.stack = [];
    }
    push(element){
        this.stack.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "stack is empty";
        }
        return this.stack.pop();
    }
    peak(){
        if(this.isEmpty()){
            return "stack is empty";
        }
        return this.stack[this.size()-1];
    }
    isEmpty(){
        return this.size() === 0;
    }
    size(){
        return this.stack.length;
    }
    print(){
        for(let i = 0 ;i <= this.size()-1;i++){
            console.log(this.stack[i]);
        }
    }
}
let stack = new Stack();
stack.push(4);
stack.push(7);
stack.push(9);
console.log(stack.pop());
stack.print();
console.log("peakkkkk");
console.log(stack.peak());