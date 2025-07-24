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
    addAtBeg(data){
        let newNode=new Node(data);
        newNode.next=this.head;
        if(this.head){
            this.head.prev=newNode;
        }
        this.head=newNode;
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
linkedList.addAtBeg(4);
linkedList.addAtBeg(5);
linkedList.addAtBeg(3);
linkedList.addAtBeg(2);
linkedList.addAtBeg(7);
linkedList.print();