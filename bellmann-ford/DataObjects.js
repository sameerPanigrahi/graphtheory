class Edge {
  constructor(to, cost) {
    this.to = to;
    this.cost = cost;
  }
}

function initializeAdjacencyList(adjacencyListGraph, NUMBER_OF_NODES) {
  // sample graph 1
  //   NUMBER_OF_NODES = 6;
  //   adjacencyListGraph = new Array(NUMBER_OF_NODES);
  //   for (let node = 0; node < NUMBER_OF_NODES; node++) {
  //     adjacencyListGraph[node] = [];
  //   }
  //   adjacencyListGraph[0].push(new Edge(1, 4));
  //   adjacencyListGraph[0].push(new Edge(5, 2));
  //   adjacencyListGraph[1].push(new Edge(2, 3));
  //   adjacencyListGraph[1].push(new Edge(4, 5));
  //   adjacencyListGraph[2].push(new Edge(3, 1));
  //   adjacencyListGraph[2].push(new Edge(5, -20));
  //   adjacencyListGraph[4].push(new Edge(3, -8));
  //   adjacencyListGraph[5].push(new Edge(4, 1));

  // sample graph 2
  NUMBER_OF_NODES = 10;
  adjacencyListGraph = new Array(NUMBER_OF_NODES);
  for (let node = 0; node < NUMBER_OF_NODES; node++) {
    adjacencyListGraph[node] = [];
  }
  adjacencyListGraph[0].push(new Edge(1, 5));
  adjacencyListGraph[1].push(new Edge(2, 20));
  adjacencyListGraph[1].push(new Edge(5, 30));
  adjacencyListGraph[1].push(new Edge(6, 60));
  adjacencyListGraph[2].push(new Edge(3, 10));
  adjacencyListGraph[2].push(new Edge(4, 75));
  adjacencyListGraph[3].push(new Edge(2, -15));
  adjacencyListGraph[4].push(new Edge(9, 100));
  adjacencyListGraph[5].push(new Edge(4, 25));
  adjacencyListGraph[5].push(new Edge(6, 5));
  adjacencyListGraph[5].push(new Edge(8, 50));
  adjacencyListGraph[6].push(new Edge(7, -50));
  adjacencyListGraph[7].push(new Edge(8, -10));

  return { adjacencyListGraph, NUMBER_OF_NODES };
}

module.exports = (function iifeInitializeBellmannFordDataObjects() {
  const INFINITY = 100000;
  const { adjacencyListGraph, NUMBER_OF_NODES } = initializeAdjacencyList();
  const distance = new Array(NUMBER_OF_NODES).fill(INFINITY);
  const prev = new Array(NUMBER_OF_NODES).fill(-1);
  return {
    NUMBER_OF_NODES: NUMBER_OF_NODES,
    INFINITY: INFINITY,
    adjacencyListGraph: adjacencyListGraph,
    distance: distance,
    prev: prev,
  };
})();
