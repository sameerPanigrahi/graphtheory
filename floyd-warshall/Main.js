const dataObj = require("./DataObjects");

// Ford-Warshall's algorithm
// for any given pair of nodes (i,j), check if there are any better path via k vertices, k ={0,1,2...n}
// so first find all paths with only 0 intermediate vertex, then 1, 2 and so on...
// the k-th vertex is accepted between (i,j) only if it is better than the paths evaluated for previous k-1 path is

// Example
// for (i,j) path through vertex 1, i.e. K = 1 is currently minimum so we have i->1->j
// if we include k = 2, we find that i->1->2->j is more than i->1->j, therefore we discard 2
// if we include k = 3, we find that i->1->3->j is less than i->1->j, therefore updated path = i->1->3->j
// similarly, evaluate k = {...4, 5, 6, ...n} for EVERY combination of (i,j)

for (let k = 0; k < dataObj.NUMBER_OF_NODES; k++) {
  for (let i = 0; i < dataObj.NUMBER_OF_NODES; i++) {
    for (let j = 0; j < dataObj.NUMBER_OF_NODES; j++) {
      //lets say the current path is optimised for k - 1 iterations (here, iterations = vertices)
      let cost_with_k_minus_1 = dataObj.cost[i][j];
      // if we include vertex k
      let cost_after_including_k = dataObj.cost[i][k] + dataObj.cost[k][j];

      if (cost_after_including_k < cost_with_k_minus_1) {
        // update the new cost of (i,j) to include vertex k
        dataObj.cost[i][j] = cost_after_including_k;
        dataObj.prev[i][j] = k; // to signify that the shortest path between (i,j) now passes through k
      }
    }
  }
}

console.log("\ncost[][] :>> \n", dataObj.cost);
console.log("\nprev[][] :>> \n", dataObj.prev);
