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
    size(){
        let count=0;
        let current=this.head;
        while(current!=null){
            count++;
            current=current.next;
        }
        return count;
    }
    getKthElement(index){
        if(index < 0 || index>=this.size()){
            
            return "invalid Index";
        }
        let current=this.head;
        for(let i=0;i<index;i++){
            current=current.next;
        }
        return current.data;
    }
}

let linkedList= new sLinkedList();
[10,20,30,40,50].forEach(element => linkedList.append(element));

console.log(linkedList.getKthElement(5));