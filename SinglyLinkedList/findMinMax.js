class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class sLinkedList{
    constructor(){
        this.head=null;
    }
    append(data){
        let newNode= new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let current = this.head;
        while(current.next!=null){
            current=current.next;
        } 
        current.next=newNode;
    }
    minMax(){
        if(!this.head){
            console.log("list not found");
        }
        let current=this.head;
        let max = this.head.data;
        let min = this.head.data;
            while(current){
                max = max > current.data ? max :current.data;
                min = min < current.data ? min : current.data; 
                current=current.next
            }
        return {min,max};
    }
}

let linkedList = new sLinkedList();
[10,30,4,6,7,8,9,3,4,5,6,7,80].forEach(x => linkedList.append(x));
console.log(linkedList.minMax());
