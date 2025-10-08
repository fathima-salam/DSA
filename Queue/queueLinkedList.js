class Node{
    constructor(data){
        this.data =data;
        this.next =null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear =null;
    }
    isEmpty(){
        return this.front=== null;
    }
    enQueue(data){
        let newNode = new Node(data);
        if(this.isEmpty()){
           this.front = this.rear = newNode; 
        }
        this.rear.next = newNode;
        this.rear =newNode;
    }
    deQueue(){
        let dequed = this.front.data;
       this.front = this.front.next; 
       
       if(this.front === null){
           this.rear = null;
       }
       return dequed;
    }
    display(){
        let temp = this.front;
        let result = "";
        while(temp){
            result += `${temp.data} => `;
            temp = temp.next;
        }
        return result;
    }
}
let queue = new Queue();
queue.enQueue(7);
queue.enQueue(6);
queue.enQueue(34);
queue.enQueue(90);
queue.enQueue(66);
console.log(queue.display());
console.log("after removing from the queue");
queue.deQueue();
console.log(queue.display());

