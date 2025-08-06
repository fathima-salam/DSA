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
}
function checkIdentical(node1,node2){
    if(!node1 && !node2) return true;
    if(!node1 || !node2) return false;
    if(node1.data != node2.data) return false;
    return checkIdentical(node1.left,node2.left) && checkIdentical (node1.right ,node2.right);
}


let tree1 = new BinaryTree();
let tree2 = new BinaryTree();
tree1.insert("A");
tree1.insert(1);
tree1.insert(2);
tree1.insert("B");
tree1.insert("C");
tree1.insert("D");
tree1.insert("A");
tree1.insert("V");
tree1.insert("H");
tree1.insert("V");


tree2.insert("A");
tree2.insert(1);
tree2.insert(2);
tree2.insert("B");
tree2.insert("C");
tree2.insert("D");
tree2.insert("A");
tree2.insert("H");
tree2.insert("V");
console.log(checkIdentical(tree1.root,tree2.root));
