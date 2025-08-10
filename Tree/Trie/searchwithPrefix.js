class TrieNode{
    constructor(){
        this.children = {};
        this.isEndOfNode = false;
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode();
    }
    insert(word){
        let node =this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node =node.children[char];
        }
        node.isEndOfNode =true;
    }
    searchWithPrefix(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char])return false;
            node = node.children[char];
        }
        return true;
    }
    display(node = this.root,word = ""){
        if(node.isEndOfNode){
            console.log(word);
        }
        for(let char in node.children){
            this.display(node.children[char] , word + char);
        }
    }
}
let trie = new Trie()
trie.insert("caravan");
trie.insert("fathima");
trie.insert("capcut");
trie.insert("fruits");
trie.insert("freeze");
trie.display();
console.log(trie.searchWithPrefix("fre"));