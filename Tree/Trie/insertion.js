class TrieNode{
    constructor(){
        this.children = {};
        this.endOfNode = false;
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.endOfNode = true;
    }
    display(node = this.root , word = " "){
        if(node.endOfNode){
            console.log(word);
        }
        for(let char in node.children){
            this.display(node.children[char] , word +char);
        }
    }
}
let trie = new Trie();
console.log("trie implemented successfully");
trie.insert("apple");
trie.insert("avocado")
trie.insert("apart");
trie.display();
