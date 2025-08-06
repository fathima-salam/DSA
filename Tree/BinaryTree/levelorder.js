class Tree{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        const newNode = new Tree(data)
        if(!this.root){
            this.root =newNode;
            return
        }
        let queue = [this.root];
        while(queue.length > 0){
            let current = queue.shift();
            if(!current.left){
                current.left = newNode;
                break;
            }else{
                queue.push(current.left);
            }
            if(!current.right){
                current.right=newNode;
                break;
            }else{
                queue.push(current.right);
            }
        }
    }
    levelOrder(){
        let queue = [this.root];
        while(queue.length > 0){
            let current = queue.shift();
            console.log(current.data);
            if(current.left)queue.push(current.left);
            if(current.right)queue.push(current.right);
        }
    }
}

let tree = new BinaryTree();
tree.insert("A");
tree.insert(1);
tree.insert(2);
tree.insert("B");
tree.insert("C");
console.log("levelOrder");
tree.levelOrder();