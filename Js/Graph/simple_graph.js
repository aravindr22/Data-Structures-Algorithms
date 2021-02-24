class Graph{
    constructor(){
        this.adjacencylist = {};
    }

    addVertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex] = [];
        }
    }

    addEdge(v1, v2){
        this.addVertex(v1);
        this.addVertex(v2);
        this.adjacencylist[v1].push(v2);
        this.adjacencylist[v2].push(v1);
    }

    removeEdge(vertex1, vertex2){
        this.adjacencylist[vertex1] = this.adjacencylist[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencylist[vertex2] = this.adjacencylist[vertex2].filter(
            v => v !== vertex1  
        );
    }

    removeVertex(vertex){
        while(this.adjacencylist[vertex].length){
            const adjacentVertex = this.adjacencylist[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencylist[vertex];
    }
}

let g = new Graph();
g.addVertex("chennai")
g.addVertex("mumbai")
g.addVertex("kochi")
console.log(g.adjacencylist);
g.addEdge("chennai","mumbai");
g.addEdge("mumbai","delhi");
g.addEdge("delhi", "kolkata");
console.log(g.adjacencylist);
g.removeVertex("mumbai");
console.log(g.adjacencylist);
g.removeVertex("delhi");
console.log(g.adjacencylist);