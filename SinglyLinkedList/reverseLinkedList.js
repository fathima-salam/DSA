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
        while(current.next!=null){
            current=current.next;
        }
        newNode.next=current.next;
        current.next=newNode;
    }
    reverseLinkedList(){
        if(!this.head){
            return "no list found";
        }
        let prev=null;
        let current=this.head;
        let next=null;
        while(current!=null){
            next= current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        this.head=prev;
    }
    print(){
        let current=this.head;
        let result="";
        while(current!=null){
            result+= `${current.data} -> `;
            current=current.next;
        }
        return result
    }
}
let linkedlist =new sLinkedList();
[20,1,3,50,60,8,9,25].forEach(element=> linkedlist.append(element));
console.log(linkedlist.print());
linkedlist.reverseLinkedList();
console.log(linkedlist.print());

