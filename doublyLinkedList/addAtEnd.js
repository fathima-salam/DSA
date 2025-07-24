class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

class dLinkedList{
    constructor(){
        this.head=null;
    }
    addAtEnd(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let current = this.head ;
        while(current.next!=null){
            current=current.next;
        }
        current.next=newNode;
        newNode.prev=current;
    }
    print(){
        let result="";
        let current = this.head;
        while(current){
            result += `${current.data} -> `;
            current = current.next;
        }
        console.log(result);
    }
}

let linkedList = new dLinkedList();
linkedList.addAtEnd(5);
linkedList.addAtEnd(1);
linkedList.addAtEnd(3);
linkedList.addAtEnd(4);
linkedList.addAtEnd(2);
linkedList.addAtEnd(8);
linkedList.print();
