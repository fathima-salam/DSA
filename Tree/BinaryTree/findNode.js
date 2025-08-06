class Tree {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor(){
        this.root =null;
    }
    insert(data){
        let newdata = new Tree(data);
        if(!this.root){
            this.root =newdata;
            return ;
        }
        let queue =[this.root];
        while(queue.length > 0){
            let current = queue.shift();
            if(!current.left){
                current.left = newdata;
                break;
            }else{
                queue.push(current.left);
            }
            if(!current.right){
                current.right =newdata;
                break;
            }else{
                queue.push(current.right);
            }
        }
    }
    findNode(value){
        let queue = [this.root];
        while(queue.length > 0){
            let current = queue.shift();
            if(current.data === value)return true;
            if(current.left)queue.push(current.left);
            if(current.right)queue.push(current.right);
        }
        return false;
    }
}

let tree = new BinaryTree();
tree.insert(5);
tree.insert(7);
tree.insert(4);
tree.insert(11);
tree.insert(9);
tree.insert(2);
tree.insert(6);
tree.insert(3);

console.log(tree.findNode(9));