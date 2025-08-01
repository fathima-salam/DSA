class Queue {
    constructor(){
        this.queue=[];
    }
    enqueue(data){
        this.queue.push(data);
    }
    dequeue(){
        if(this.isEmpty()){
            return "UnderFlow";
        }
        return this.queue.shift();
    }
    peak(){
        if(this.isEmpty()){
            return "UnderFlow";
        }
        return this.queue[0];
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    displayQueue(){
        let result =""
        for(let i=0;i<this.queue.length;i++){
            result+=` ${this.queue[i]}`;
        }
        return result;
    }
}

let queue = new Queue();
queue.enqueue(20);
queue.enqueue(9);
queue.enqueue(99);
queue.enqueue(3);
queue.enqueue(7);
queue.enqueue(50);
console.log(queue.displayQueue());
console.log("after dequeue");
queue.dequeue();
console.log(queue.displayQueue());
console.log(queue.peak());
console.log(queue.isEmpty());

