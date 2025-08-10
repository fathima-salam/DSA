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
    kthelevel(k){
        let queue =[{node:this.root,level:1 }];
        while(queue.length > 0){
            let {node,level} = queue.shift();
            if(level === k){
                console.log(node.data);
            }
            if(node.left)queue.push({node:node.left,level : level+1});
            if(node.right)queue.push({node:node.right , level : level+1});
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
tree.kthelevel(2);
