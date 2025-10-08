class Heap{
    constructor(){
        this.heap = [];
    }
    insert(value){
        this.heap.push(value);
        let index = this.heap.length-1;
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            if(this.heap[index]>this.heap[parentIndex]){
                [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]];
                index = parentIndex;
            }else{
                break;
            }
        }
    }
    levelOrder(){
        console.log(this.heap.join(" "));
    }
}
let heap = new Heap();
console.log("heap inserted successfully");
heap.insert(5);
heap.insert(10);
heap.insert(20);
heap.insert(3);
heap.insert(50);
heap.levelOrder();
