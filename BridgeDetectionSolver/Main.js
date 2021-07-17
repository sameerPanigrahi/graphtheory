const {
  preOrderId,
  UNVISITED,
  lowlink,
  adjMat,
  NUMBER_OF_NODES,
} = require("./DataObjects");

let preOrderIdCount = -1;

// perfrom dfs to assign pre-order ids and lowlinks of the nodes
while (preOrderId.includes(UNVISITED)) {
  const root = preOrderId.indexOf(UNVISITED);
  const parent = -1;
  dfsToGenerateLowlinksAndPreOrderIds(root, parent);
}

// perform dfs again to evaluate the edges from the generated pre-order ids and lowlinks
// this dfs must use the same strategy to select the nodes as dfsToGenerateLowlinksAndPreOrderIds()
// here, the strategy is a simple sequential iteration of the nodes in the adjacency matrix
const visited = new Array(NUMBER_OF_NODES).fill(false);
const bridges = [];
while (visited.includes(false)) {
  const root = visited.indexOf(false);
  dfsToEvaluateEdge(root);
}
function dfsToEvaluateEdge(node) {
  visited[node] = true;

  // node selection strategy of the dfs must be the same as dfsToGenerateLowlinksAndPreOrderIds
  // for the current logoc, both follow a simple sequential iteration of the nodes in the adjacency matrix
  for (let i = 0; i < NUMBER_OF_NODES; i++) {
    // is a parent?
    if (visited[i] === true) continue;

    // is a neighbor?
    let neighbor;
    if (adjMat[node][i] === 0) continue;
    else neighbor = i;

    if (visited[neighbor] === false) dfsToEvaluateEdge(neighbor);

    if (lowlink[neighbor] > preOrderId[node])
      bridges.push(`(${node},${neighbor})`);
  }
}

function dfsToGenerateLowlinksAndPreOrderIds(node, parent) {
  preOrderIdCount++;
  preOrderId[node] = preOrderIdCount;
  lowlink[node] = preOrderIdCount;

  for (let i = 0; i < NUMBER_OF_NODES; i++) {
    // is a parent?
    if (i === parent) continue;

    // is a neighbor?
    let neighbor;
    if (adjMat[node][i] === 0) continue;
    else neighbor = i;

    if (preOrderId[neighbor] === UNVISITED)
      dfsToGenerateLowlinksAndPreOrderIds(neighbor, node);
    lowlink[node] = Math.min(lowlink[node], lowlink[neighbor]);
  }

  // base case of recursion- when all the neighbors have been visisted -> return
  // eslint-disable-next-line no-useless-return
  return;
}

console.log("bridges :>> ", bridges);
console.log("preOrderId :>> ", preOrderId);
console.log("lowlink :>> ", lowlink);
