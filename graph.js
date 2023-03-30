// class Graph{
//     constructor(){
//         this.adjacencyList={}
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex]=new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//        this.adjacencyList[vertex1].add(vertex2)
//        this.adjacencyList[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1,vertex2){
//         return (this.adjacencyList[vertex1].has(vertex2)&&this.adjacencyList[vertex2].has(vertex1))
//     }
//    display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex+':'+[...this.adjacencyList[vertex]]);
//         }
//     }
//     deleteEdge(vertex1,vertex2){
//          this.adjacencyList[vertex1].delete(vertex2)
//          this.adjacencyList[vertex2].delete(vertex1)
//     }
//     deleteVertix(vertex){
//         if(!this.adjacencyList[vertex]){
//             return false
//         }
//         for(let adjacencyVertex of this.adjacencyList[vertex]){
//             this.deleteEdge(vertex,adjacencyVertex)
//         }
//         delete this.adjacencyList[vertex]
//     }
  
    // bfs(start){
    //     let queue=[start]
    //     let visited={}
    //     visited[start]=true
    //     while(queue.length){
    //         let currVertex=queue.shift()
    //         console.log(currVertex);
    //         for(let neighbor of this.adjacencyList[currVertex]){
    //             if(!visited[neighbor]){
    //                 visited[neighbor]=true
    //                 queue.push(neighbor)
    //             }
    //         }
    //     }

    // }

    // bfs(start){
    //     let queue=[start]
    //     let visited={}
    //     visited[start]=true;
    //     while(queue.length){
    //         let currVertex=queue.shift()
    //         console.log(currVertex);
    //         for(let neighbor of this.adjacencyList[currVertex]){
    //             if(!visited[neighbor]){
    //                 visited[neighbor]=true
    //                 queue.push(neighbor)
    //             }
    //         }
    //     }
    // }
// }

// let graph=new Graph()
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addEdge('B','C')
// graph.bfs('B')
// graph.display()


// graph.deleteVertix('B')
// console.log('afterrrr');
// graph.display()
// console.log(graph.hasEdge('C','B'));
// console.log(graph.hasEdge('A','B'));
// console.log(graph.hasEdge('B','C'));


// class Graph{
//     constructor(){
//         this.adjacencyList={}
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList=new Set()
//         }
//     }
//     addEdges(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1,vertex2){
//         return(this.adjacencyList[vertex1].has(vertex2)&&this.adjacencyList[vertex2].has(vertex1))
//     }
//     display(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex+': '+this.adjacencyList[vertex]);
//         }
//     }
//     deleteEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }
//     deleteVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             return false
//         }
//         for(let advertex of this.adjacencyList[vertex]){
//             this.deleteEdge(advertex,vertex)
//         }
//         delete this.adjacencyList[vertex]
//     }
// //     bfs(start){
// //         const queue=[start]
// //         let visited={}
// //         visited[start]=true;
// //         if(queue.length){
// //             let curr=queue.shift()
// //             console.log(curr);
// //             for(let vertex of this.adjacencyList[curr]){
// //                 if(!visited[vertex]){
// //                     visited[vertex]=true
// //                     queue.push(vertex)
// //                 }
// //             }
// //         }
// //     }

// bfs(start){
//     const queue=[start]
//     const visited={}
//     visited[start]=true
//     while(queue.length){
//         let curr=queue.push()
//       console.log(curr)
//         for(let vertex of this.adjacencyList[curr]){
//             if(!visited[vertex]){
//                 visited[vertex]=true
//                 queue.push(vertex)
//             }
//         }
//     }
// }


// }


// class Graph{
//     constructor(){
//         this.adjancencyList={}
//     }
//     addVertex(vertex){
//         if(!this.adjancencyList[vertex]){
//               this.adjancencyList[vertex]=new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjancencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjancencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjancencyList[vertex1].add(vertex2)
//         this.adjancencyList[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1,vertex2){
//        return(1&&) 
//     }
// }