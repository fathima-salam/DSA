class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

class dLinkedList{
    constructor(){
        this.head=null;
    }
    addFrond(data){
        let newNode = new Node(data);
        newNode.next = this.head ;
        if(this.head ){
            this.head.prev = newNode;
        }
        this.head=newNode;
    }
    addEnd(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
        }
        let current=this.head;
        while(current.next!=null){
            current=current.next;
        }
        current.next = newNode;
        newNode.prev = current;  
    }
    size(){
        let count = 0;
        let current=this.head;
        while(current){
            count++
            current=current.next;
        }
        return count;
    }
    addATPos(index,data){
        let newNode = new Node(data);
        if(index < 0 || index >this.size()){
            console.error("incalid Index");
            return;
        }
        if(index === 0){
            newNode.next = this.head;
            if(this.head){
                this.head.prev=newNode;
            }
            this.head=newNode

            return;
        }
        let current= this.head;
        for(let i=0;i<index;i++){
            current=current.next;
        }
        newNode.next = current.next;
        newNode.prev = current;

        if(current.next){
            current.prev.next=newNode;
        }
        current.prev = newNode;
    }
    removeFirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
        if(this.head){
            this.next=prev=null;
        } 
    }
    removeLast(){
        if(!this.head){
            return;
        }
        let current=this.head;
        if(!this.head.next){
            this.head = null;
            return;
        }
        while(current.next.next!=null){
            current=current.next;
        }

        current.next=null;

    }
    removeIndex(index){
        if(index < 0 || index >= this.size()){
            console.error("invalid error");
            return;
        }
        if(index === 0){
            this.head=this.head.next;
            if(this.head){
                this.head.prev=null;
            }
            return;
        }
        let current=this.head;
         for(let i=0;i<index-1;i++){
            current=current.next
         }
         if(current.next){
            current.next = current.next.next;
            if(current.next){
            current.next.prev=current;
         }
         }
         
    }
    print(){
        let current=this.head;
        let result="";
        while(current){
            result+= `${current.data} -> `
            current=current.next;
        }
        return result;
    }
}

let linkedList =new dLinkedList();
[1,2,3,4,5,6,7].forEach(x => linkedList.addFrond(x));
[10,20].forEach(x => linkedList.addEnd(x));
console.log(linkedList.print());
linkedList.addATPos(3,100);
console.log(linkedList.print());
linkedList.removeIndex(3);
console.log(linkedList.print());

