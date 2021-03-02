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

    dfsRecursive(start){
        const result = []
        const visited = {};
        const adjacencylist = this.adjacencylist;

        (function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencylist[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start)

        return result;
    }

    dfsIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencylist[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }

    bfsIterative(start){
        const queue = [start];
        const visited = {};
        const result = [];
        let currentVertex;

        visited[start] = true;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            // this.adjacencylist[currentVertex].slice().reverse().forEach(neighbour => {       //Iterates from left to right
            this.adjacencylist[currentVertex].forEach(neighbour => {                            //Iterates from right to left
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            });
        }
        return result;
    }

}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");
console.log(g.dfsRecursive("A"));
console.log(g.dfsIterative("A"));
console.log(g.bfsIterative("A"));