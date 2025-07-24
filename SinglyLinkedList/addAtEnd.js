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
    addAtEnd(data){
        const newNode= new Node(data);
        if(!this.head){
            this.head=newNode;
            return
        }
        let current=this.head;
        while(current.next!=null){
            current=current.next;
        }
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

let linkeList= new sLinkedList();
linkeList.addAtEnd(4);
linkeList.addAtEnd(6);
linkeList.addAtEnd(15);
linkeList.print();