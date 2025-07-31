class Node{
    constructor(data){
        this.data =data;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
    }
    isEmpty(){
        return this.top === null;
    }
    push(data){
        let newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
    }
    pop(){
        if(this.top === null){
            return "stack is empty";
        }
        let popped = this.top.data;
        this.top = this.top.next;
        return popped;
    }
    peak(){
        if(this.top === null){
            return "stack is empty";
        }
        return this.top.data;
    }
    count(){
        let temp = this.top;
        let count =0;
        while(temp){
            count++;
            temp=temp.next;
        }
        return count;
    }
    display(){
        let temp = this.top;
        while(temp !==null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}


let stack = new Stack();
stack.push(4);
stack.push(24);
stack.push(1);
stack.push(5);
stack.push(6);
stack.push(8);
stack.display();
console.log(stack.peak());
stack.pop();
stack.pop();
console.log("after two pop operation");
stack.display();

