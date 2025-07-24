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
    addAtFrond(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        } 
        newNode.next=this.head;
        this.head=newNode;
    }
    print(){
        let current=this.head;
        while(current!=null){
            console.log(current.data);
            current=current.next;
        }
    }
}

let linkedList = new sLinkedList();
linkedList.addAtFrond(5);
linkedList.addAtFrond(15);
linkedList.addAtFrond(59);
linkedList.addAtFrond(99);
linkedList.addAtFrond(7);
linkedList.print();