class Tree{
    constructor(data){
        this.data =data;
        this.left = null;
        this.right =null;
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
    countleafNode(node = this.root){
        if (!node) return 0;
       
        if(!node.left && !node.right){ 
            return 1;
        }
        let count = 0;
        let queue = [node];
        while(queue.length > 0){
            let current = queue.shift();
            if(!current.left && !current.right){
                count++;
            }
            if(current.left)queue.push(current.left);
            if(current.right)queue.push(current.right);
        }
        return count;
    }
}


let tree = new BinaryTree();
tree.insert("A");
tree.insert(1);
tree.insert(2);
tree.insert("B");
tree.insert("C");
tree.insert("D");
tree.insert("A");
tree.insert("V");
console.log(tree.countleafNode());
