class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }
    addEdge(v1,v2){
        if(!this.adjacencyList[v1]) this.addVertex(v1);
        if(!this.adjacencyList[v2]) this.addVertex(v2);

        this.adjacencyList[v1].add(v2);
        this.adjacencyList[v2].add(v1);
    }
    deleteEdge(v1,v2){
        this.adjacencyList[v1].delete(v2);
        this.adjacencyList[v2].delete(v1);
    }
    deleteVertex(v1){
        if(!this.adjacencyList[v1])return;
        for(let adjacentvertex in this.adjacencyList){
            this.addEdge(v1,adjacentvertex);
        }
        delete this.adjacencyList[vertex];
    }
    print(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} ==> ${[...this.adjacencyList[vertex]].join(" ")}`);
        }
    }
}
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A","B");
graph.addEdge("B","C");
graph.addEdge("A","D");
graph.addEdge("B","E");
graph.addEdge("B","F");
graph.addEdge("C","D");
graph.addEdge("E","B");
graph.addEdge("B","A");
graph.addEdge("D","C");
graph.addEdge("D","E");
graph.addEdge("B","D");

graph.print();

graph.deleteEdge("A","B");
console.log("after deletion");
graph.print();


