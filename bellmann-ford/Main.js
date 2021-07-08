const dataObj = require("./DataObjects");

// console.log("Graph:>> ", dataObj.adjacencyListGraph);

dataObj.distance[0] = 0; // set distance from source node to itself as 0

// Bellmann-Ford algorithm
// for a graph with n nodes, perform edge relaxation (n - 1) times; notice loop-variable i starts from 1 to (n-1)
for (let i = 1; i <= dataObj.NUMBER_OF_NODES - 1; i++) {
  relaxEdges();
  console.log(`distance after iteration ${i} :>>\n`, dataObj.distance);
}

// perform edge relaxation for one last time to check if ditsance[] reduces
// ideally after n-1 iterations, the distance[] is optimized and should not minimize further
// if the distance[] can still be minimized, then we have a negative cycle
const inNegativeCycleDetectionMode = true;
relaxEdges(inNegativeCycleDetectionMode);

function relaxEdges(inNegativeCycleDetectionMode) {
  // relax each edge
  // to iterate all edges, iterate over all the nodes of the graph and evaluate their edges.
  for (const node in dataObj.distance) {
    const edges = dataObj.adjacencyListGraph[node];
    edges.forEach((edge) => {
      if (dataObj.distance[node] + edge.cost < dataObj.distance[edge.to]) {
        if (inNegativeCycleDetectionMode === true) {
          console.log(`graph contains negative cycle`);
          return;
        }
        dataObj.distance[edge.to] = dataObj.distance[node] + edge.cost;
        dataObj.prev[edge.to] = node;
      }
    });
  }
}

console.log(`\n\n`);
console.log(`Final distance[] array :>>\n`, dataObj.distance);
console.log(`prev[] array :>>\n`, dataObj.prev);
