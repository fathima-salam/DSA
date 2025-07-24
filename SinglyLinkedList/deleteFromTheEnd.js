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
        let newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let current = this.head;
        while(current.next != null){
            current=current.next;
        }
        current.next=newNode;
    }
    deleteFromEnd(){
        if(!this.head){
            return "list is empty";
        }
        if(this.head.next===null){
            this.head=null;
            return;
        }
        let current = this.head;
        while(current.next.next!=null){
            current=current.next;
        }
        current.next=null;
    }
    print(){
        let current=this.head;
        let result="";
        while(current!=null){
            result+=`${current.data} => `
            current=current.next;
        }
        return result;
    }
}
let linkedList = new sLinkedList();
[10,30,4,6,7,8,9,3,4,5,6,7,8].forEach(x => linkedList.append(x));
linkedList.deleteFromEnd()
console.log(linkedList.print());