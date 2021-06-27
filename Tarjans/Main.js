const helpers = require("./Helpers");
const dataObj = require("./DataObjects");

let graph = new Array(dataObj.NUMBER_OF_NODES);
graph = helpers.initializeGraph(dataObj.NUMBER_OF_NODES);
console.log("graph :>> ", graph);

// start Tarjans
for (let node = 0; node < dataObj.NUMBER_OF_NODES; node++) {
  if (!dataObj.visited[node]) {
    dfs(node);
  }
}

// display the stringlt-connected-components
// for (const i in lowlink) {
//   let sccId = lowlink[i];
//   if (scc[sccId] === null || scc[sccId] === undefined) {
//     scc.push(sccId);
//     scc[sccId] = new Array();
//   }
//   scc[sccId].push(i);
// }
// console.log("scc :>> ", scc);

console.log("lowlink :>> ", dataObj.lowlink);

function dfs(node) {
  dataObj.nodeIds[node] = dataObj.lowlink[node] = ++dataObj.id;
  dataObj.stack.push(node);
  dataObj.visited[node] = dataObj.onStack[node] = true;

  // explore neighbors and get their lowlinks
  // adjust the current node's lowlink if required
  for (const i in graph[node]) {
    const neighbor = graph[node][i];
    if (!dataObj.visited[neighbor]) dfs(neighbor);
    if (dataObj.onStack[neighbor]) {
      dataObj.lowlink[node] = Math.min(
        dataObj.lowlink[node],
        dataObj.lowlink[neighbor]
      );
    }
  }

  // if you have reached a point where after exploring the neighbor
  // the current node's lowlink is same as its id, then the current node is the start of a scc.
  // pop stack until all the nodes of the scc are removed
  if (dataObj.nodeIds[node] === dataObj.lowlink[node]) {
    let currentNode;
    while (true) {
      currentNode = dataObj.stack.pop();
      dataObj.onStack[currentNode] = false;
      if (dataObj.nodeIds[currentNode] === dataObj.lowlink[currentNode]) break;
    }
  }
}
