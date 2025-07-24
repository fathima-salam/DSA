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
    deleteAData(targetData){
        if(!this.head){
            return "list Not Found";
        }
        if(this.head.data===targetData){
            this.head=this.head.next
            return
        }
        let current=this.head;
        while(current.next && current.next.data!=targetData){
            current=current.next;
        }
        current.next=current.next.next;
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
linkedList.deleteAData(10)
console.log(linkedList.print());