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
    size(){
        let count=0;
        let current=this.head;
        while(current!=null){
            current=current.next;
            count++;
        }
        return count;
    }
    addAtBeg(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        newNode.next=this.head;
        this.head=newNode;
    }
    insertAtPos(index,data){
        let newNode= new Node(data);
        if(index < 0 || index >= this.size()){
            console.log("invalid Index");
            return;
        }
        if(index ===0){
            newNode.next=this.head;
            this.head=newNode;
            return;
        }
        let current=this.head;
        for(let i=1;i<index-1;i++){
            current=current.next;
        }
        newNode.next=current.next;
        current.next=newNode;
    }
    print(){
        let current=this.head;
        while(current!=null){
            console.log(current.data);
            current=current.next;
        }
    }
}

let linkedlist= new sLinkedList()
linkedlist.addAtBeg(8);
linkedlist.addAtBeg(7);
linkedlist.addAtBeg(6);
linkedlist.addAtBeg(5);
linkedlist.addAtBeg(4);
linkedlist.addAtBeg(3);
linkedlist.addAtBeg(2);
linkedlist.addAtBeg(1);
linkedlist.insertAtPos(5,11);
linkedlist.print()