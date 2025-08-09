class Heap{
    constructor(){
        this.heap = [];
    }
    insert(value){
        this.heap.push(value);
        let index = this.heap.length-1;
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2);
            if(this.heap[index] > this.heap[parentIndex]){
                [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]];
                index = parentIndex ; 
            }else{
                break;
            }
        }
    }
    print(){
        console.log(this.heap.join(" "));
    }
    deletion(){
        let max = this.heap[0];
        this.heap[0] = this.heap.pop();
        let length = this.heap.length-1;
        let index = 0;
        while(true){
            let left  = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;
            if(left < length && this.heap[left] > this.heap[index]){
                largest = left;
            }
            if(right < length && this.heap[right] > this.heap[index]){
                largest = right;
            }
            if(largest != index){
                [this.heap[largest],this.heap[index]] = [this.heap[index],this.heap[largest]]
            }else{
                break;
            }
        }
        return max;
    }
}
let heap = new Heap();
console.log("heap inserted successfully");
heap.insert(5);
heap.insert(10);
heap.insert(20);
heap.insert(3);
heap.insert(50);
heap.print();
console.log("deletion");
console.log(heap.deletion());
console.log("after deletion");
heap.print();
