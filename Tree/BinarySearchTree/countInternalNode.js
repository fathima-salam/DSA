class Tree{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right= null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        let newNode = new Tree(data);
        if(!this.root){
            this.root = newNode;
            return;
        }
        let current = this.root;
        while(current){
            if(data < current.data){
                if(!current.left){
                    current.left = newNode;
                    return
                }current = current.left;
            }else{
                if(!current.right){
                    current.right = newNode;
                    return
                }current = current.right;
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
    countInternalNode(){
        let queue = [this.root];
        let count = 0;
        while(queue.length > 0){
            let current = queue.shift();
            if(current.left || current.right){
                count++;
            }
            if(current.left)queue.push(current.left);
            if(current.right)queue.push(current.right);
        }
        return count;
    }
}
let tree = new BinarySearchTree();
tree.insert(5);
tree.insert(7);
tree.insert(4);
tree.insert(8);
tree.insert(2);

tree.levelOrder();
console.log(tree.countInternalNode());