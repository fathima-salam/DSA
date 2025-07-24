class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class sLinkedList{
    constructor(data){
        this.data=null;
    }
    addFirst(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        newNode.next=this.head;
        this.head=newNode;
    }
    addLast(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let current= this.head;
        while(current.next){
            current=current.next;
        }
        current.next=newNode;
    }

    size(){
        let current=this.head;
        let count=0;
        while(current){
            count++;
            current=current.next;
        }
        return count;
    }
    addAtIndex(index,data){
        if(index<0 || index > this.size()){
            console.error("invalid Index")
            return;
        }
        let newNode=new Node(data);
        if(index===0){
            newNode.next = this.head;
            this.head=newNode;
        }
        let current=this.head;
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
        newNode.next=current.next;
        current.next=newNode;
    }
    addAtMiddle(data){
        let newNode= new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let prev=null;
        let slow=this.head;
        let fast=this.head;

        while(fast && fast.next){
            prev=slow;
            slow=slow.next;
            fast=fast.next.next;
        }
        newNode.next=prev.next;
        prev.next=newNode;
    }
    removeFirst(){
        if(!this.head){
            return;
        }
        this.head=this.head.next;
    }
    removeLast(){
        if(!this.head){
            return;
        }
        let current=this.head;
        while(current.next.next){
            current=current.next;
        }
        current.next=null;
        
    }
    removeFromIndex(index){
        if(index<0 || index>=this.size()){
            console.log("invalid index");
            return;
        }
        if(index===0){
            this.head=this.head.next;
            return;
        }
        let current=this.head;
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
       
          current.next = current.next ? current.next.next: null
    }
    print(){
        let current = this.head;
        while(current) {
            console.log(current.data);
            current=current.next;
        }
    }
}

let linkedList=new sLinkedList();
linkedList.addFirst(3);
linkedList.addFirst(6);
linkedList.addFirst(2);
linkedList.addFirst(8);
linkedList.addFirst(9);
linkedList.addLast(77);
linkedList.addLast(100)
linkedList.addAtIndex(5,58)
linkedList.addAtMiddle(4);
linkedList.print();
console.log("size "+linkedList.size());
linkedList.removeFirst()
linkedList.removeLast()
linkedList.print();
console.log("size "+linkedList.size());
linkedList.removeFromIndex(3);
linkedList.print();
console.log("size "+linkedList.size());
