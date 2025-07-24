class Node {
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
        const newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let current = this.head;
        while(current.next!=null){
            current=current.next;
        }
        current.next=newNode;
    }
    insertAfterData(targetData,newData){
        const newNode = new Node(newData);
        let current = this.head;
        while(current != null && current.data!=targetData){
            current=current.next;
        }
        newNode.next=current.next;
        current.next=newNode;
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
linkedList.append(6);
linkedList.append(7);
linkedList.append(9);
linkedList.append(16);
linkedList.append(17);
linkedList.append(5);
linkedList.insertAfterData(17,100)
linkedList.print();
