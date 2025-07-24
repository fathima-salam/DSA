class Node{
    constructor(data){
        this.data = data;
        this.next = null;

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
        current.next=newNode;
    }
    reverse(){
        this.head = this.reverserecursively(this.head);
    }
    reverserecursively(head=this.head){
        if(head==null || head.next === null)return head;
        let newHead= this.reverserecursively(head.next);

        head.next.next=head;
        head.next=null;
        return newHead;
    }
    print(){
        let result="";
        let current=this.head;
        while(current){
            result+=`${current.data} -> `
            current=current.next;
        }
        console.log(result) ;
    }
}
let linkedList = new sLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.print();
linkedList.reverse();
linkedList.print();