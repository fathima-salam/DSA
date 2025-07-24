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
        newNode.next = current.next;
        current.next = newNode;
    }
    findMiddle(){
        let fast=this.head;
        let slow=this.head;
        while(fast!=null && fast.next!==null){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow.data;
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

let linkedList = new sLinkedList();
[20,30,40,50,60,70,90,100].forEach(x=> linkedList.append(x));
console.log(linkedList.print());
console.log(linkedList.findMiddle());