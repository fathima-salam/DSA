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
    size(){
        let current = this.head;
        let count=0;
        while(current){
            count++;
            current=current.next;
        }
        return count;
    }
    addAtPos(index,data){
        let newNode =new Node(data);
        if(index < 0 || index >this.size()){
            console.log("invalid index");
            return;
        }
        if(index === 0 ){
            newNode.next = this.head;
            if(this.head){
                this.head.prev=newNode;
            }
            this.head=newNode
            return;
        }
        let current =this.head;
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
        newNode.next = current.next;
        if(current.next){
            current.next.prev = newNode;
        }
        current.next = newNode;
        newNode.prev = current;
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
linkedList.addAtPos(3,100);
linkedList.print();