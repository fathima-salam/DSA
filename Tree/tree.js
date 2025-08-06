class Tree{
    constructor(value){
        this.value =  value;
        this.children = [];
    }
    addChild(childNode){
        this.children.push(childNode)
    }
}

const root = new Tree("A");
const nodeA = new Tree("B");
const nodeB = new Tree("C");
const nodeC = new Tree("D");
const nodeX = new Tree("X");
const nodeY = new Tree("Y");

root.addChild(nodeA);
root.addChild(nodeB);
root.addChild(nodeC);
nodeA.addChild(nodeX);
nodeA.addChild(nodeY);