class Tree{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
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
            return ; 
        }
        let current = this.root;
        while(current){
            if(data < current.data){
                if(!current.left){
                    current.left = newNode;
                    return ;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = newNode;
                    return ;
                }
                current = current.right;
            }
        }
    }
    inOrder(node = this.root){
        if(node){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
    preOrder(node = this.root){
        if(node){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }
    postOrder(node = this.root){
        if(node){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    }
    levelOrder(){
        let queue = [this.root];
        while(queue.length>0){
            let current = queue.shift();
            console.log(current.data);
            if(current.left)queue.push(current.left);
            if(current.right)queue.push(current.right);
        }
    }
}
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);
console.log("inOrder Traversal");
tree.inOrder();
console.log("preOrder Traversal");
tree.preOrder();
console.log("postOrder Traversal");
tree.postOrder();
console.log("levelOrder Traversal");
tree.levelOrder();
