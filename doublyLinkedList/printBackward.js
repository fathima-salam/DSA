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
    printBackward(){
        if(!this.head){
            console.log("Liked List Nor Found");
            return;
        }
        let current = this.head;
        while(current.next !=null){
            current = current.next;
        }
        while (current!=null){
            console.log(current.data);
            current=current.prev;
        }
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
linkedList.printBackward();