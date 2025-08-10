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
}
function checkIdentical(node1,node2){
    if(!node1 && !node2)return true;
    if(!node1 || !node2)return false;
    if(node1.data != node2.data)return false;
    return checkIdentical(node1.left,node2.left) && checkIdentical(node1.right,node2.right);
}

let tree1 = new BinaryTree();
let tree2 = new BinaryTree();
tree1.insert(5);
tree1.insert(3);
tree1.insert(4);
tree1.insert(2);
tree1.insert(6);
tree1.insert(7);
tree1.insert(45);

tree2.insert(5);
tree2.insert(3);
tree2.insert(4);
tree2.insert(2);
tree2.insert(6);
tree2.insert(7);
tree2.insert(5);
console.log("check identical")
console.log(checkIdentical(tree1.root,tree2.root));
