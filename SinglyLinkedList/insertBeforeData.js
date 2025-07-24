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
        const newNode= new Node(data)
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
    insertBeforeData(targetdata,newdata){
        let newNode=new Node(newdata)
        if(this.head && this.head.data===targetdata){
            newdata.next=this.head;
            this.head=newdata;
            return;
        }
        let current=this.head;
        let prev=null
        while(current != null && current.data!=targetdata){
            prev=current
            current=current.next;
        }
        if(current===null){
            console.log("target not fount");
            return
        }
        newNode.next=current; 
        prev.next=newNode;
    }
    print(){
        let current=this.head;
        while(current != null){
            console.log(current.data);
            current=current.next;
        }
    }
}

let linkedList = new sLinkedList()
linkedList.append(6);
linkedList.append(7);
linkedList.append(9);
linkedList.append(16);
linkedList.append(17);
linkedList.append(5);
linkedList.insertBeforeData(17,100);
linkedList.print();
