class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null; 
    }
}

class dLinkedList{
    constructor(){
        this.head=null;
    }
    append(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let current=this.head;
        while(current.next!=null){
            current=current.next;
        }
        current.next = newNode;
        newNode.prev = current;
    }
    removebeg(){
        if(!this.head){
            return;
        }
        if(this.head.next===null){
            this.head=null;
            return
        }
        this.head = this.head.next;
        this.head.prev =null;
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
linkedList.append(4);
linkedList.append(5);
linkedList.append(3);
linkedList.append(2);
linkedList.append(7);
linkedList.print();
linkedList.removebeg();
linkedList.print();