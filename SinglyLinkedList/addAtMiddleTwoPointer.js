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
        let newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let current=this.head;
        while(current.next != null){
            current=current.next;
        } 
        current.next=newNode; 
    }
    addAtMid(data){
        let newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let slow = this.head;
        let fast = this.head;
        while(fast.next != null && fast.next.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        newNode.next = slow.next;
        slow.next = newNode;
    }
    print(){
        let current = this.head;
        while(current != null){
            console.log(current.data);
            current=current.next;
        }
    }
}

let linkedlist= new sLinkedList()
linkedlist.append(8);
linkedlist.append(7);
linkedlist.append(6);
linkedlist.append(5);
linkedlist.append(9);
linkedlist.append(4);
linkedlist.append(3);
linkedlist.append(2);
linkedlist.append(1);
linkedlist.addAtMid(1000);
linkedlist.print()