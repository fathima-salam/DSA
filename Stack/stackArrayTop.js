class Stack{
    constructor(){
        this.stack = [];
        this.top = -1;
    }
    push(element){
        this.top++;
        this.stack[this.top] = element
    }
    pop(){
        if(this.isEmpty()){
            return "stack is empty";
        }
        let popped = this.stack[this.top];
        this.top--;
        return popped;
    }
    isEmpty(){
        return this.size() === 0;
    }
    peak(){
        if(this.isEmpty()){
            return "stack is empty";
        }
        return this.stack[this.top];
    }
    size(){
        return this.stack.length;
    }
    display(){
        for(let i=this.top;i>=0;i--){
            console.log(this.stack[i]);
        }
    }
}

let stack = new Stack();
stack.push(4);
stack.push(7);
stack.push(9);

stack.display();
