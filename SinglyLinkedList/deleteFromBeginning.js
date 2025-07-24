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
        current.next=newNode;
    }
    deleteFromBeginning(){
        if(!this.head){
            return "no elemet to delete";
        }
        this.head=this.head.next;
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
linkedList.deleteFromBeginning()
linkedList.deleteFromBeginning()
console.log(linkedList.print());