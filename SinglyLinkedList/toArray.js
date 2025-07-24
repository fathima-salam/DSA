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
        let newNode= new Node(data);
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
    toArray(){
        if(!this.head){
            return "List Not Found";
        }
        let arr=[];
        let current=this.head;
        while(current){
            arr.push(current.data);
            current=current.next;
        }
        return arr;
    }
}

let linkedList = new sLinkedList();
[10,30,4,6,7,8,9,3,4,5,6,7,8].forEach(x => linkedList.append(x));
console.log(linkedList.toArray());
