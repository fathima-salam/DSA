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
        newNode.next=current.next;
        current.next=newNode;
    }
    size(){
        let count=0;
        let current=this.head;
        while(current!=null){
            count++;
            current=current.next;
        }
        return count;
    }
    addAtMiddle(data){
        let newNode = new Node(data);
        let limit=Math.floor(this.size()/2);
        console.log("middle:"+limit)

        let current=this.head;
        for(let i=0;i<limit-1;i++){
            current=current.next
        }
        newNode.next=current.next;
        current.next=newNode
    }
    print(){
        let current=this.head;
        while(current!=null){
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
linkedList.addAtMiddle(100);
linkedList.print();