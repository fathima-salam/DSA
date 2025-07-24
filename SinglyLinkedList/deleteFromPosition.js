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
    size(){
        if(!this.head){
            return "List Not Found";
        }
        let count=0;
        let current = this.head;
        while(current!=null){
            count++;
            current=current.next;
        }
        return count;
    }
    deleteFromPosition(index){
        if(index < 0 ||index >this.size()){
            console.log("invalid Index");
            return;
        }
        if(index===0){
            this.head = this.head.next;
            return;
        }
        let current=this.head;
        let prev=null
        for(let i=0;i<index;i++){
            prev=current;
            current=current.next;
        }
        prev.next=current.next;
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
linkedList.deleteFromPosition(0)
console.log(linkedList.print());