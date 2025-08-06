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
    search(data){
        let current = this.root;
        while(current){
            if(data === current.data)return true;
            data < current.data ? current = current.left : current = current.right;
        }
        return false;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);
console.log(tree.search(5));
console.log(tree.search(8));
console.log(tree.search(15));
console.log(tree.search(50));



