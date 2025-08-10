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
        let newData = new Tree(data);
        if(!this.root){
            this.root = newData;
            return;
        }
        let current = this.root;
        while(current){
            if(data < current.data){
                if(!current.left){
                    current.left = newData;
                    return ; 
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = newData;
                    return ;
                }
                current = current.right;
            }
        }
    }
    height(node = this.root){
        if(!node)return -1;
        return 1+Math.max(this.height(node.left),this.height(node.right));
    }
    isBalanced(node = this.root){
        if(!node)return true;
        let leftheight = this.height(node.left);
        let rightHeight = this.height(node.right);
        if(Math.abs(leftheight - rightHeight)> 1)return false;
        return this.isBalanced(node.left)&&this.isBalanced(node.right);
    }
    inOrder(node = this.root){
        if(node){
           this.inOrder(node.left);
           console.log(node.data);
           this.inOrder(node.right); 
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(4);
tree.insert(10);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.inOrder();
console.log(tree.isBalanced());

