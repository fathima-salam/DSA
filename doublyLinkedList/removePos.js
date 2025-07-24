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
    removeAtPos(index){
        if(index<0 || index >this.size()){
            console.log("invalid index");
            return;
        }
        if(index=== 0){
            if(this.head.next){
                this.head = this.head.next;
                this.head.prev = null;
                return;
            }else{
                this.head = null;
                return;
            }
        }
        let current =this.head;
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
        if(current.next === null){
            current.prev.next =null;
            return;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
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
linkedList.removeAtPos(5);
linkedList.print();