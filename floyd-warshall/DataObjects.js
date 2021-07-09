const INFINITY = 100000;
const NO_PREVIOUS_NODE = -1;
let NUMBER_OF_NODES, cost;

initializeCostMatrix();

// initialize previous path matrix to reconstruct shortest path
const prev = new Array(NUMBER_OF_NODES);
for (let i = 0; i < NUMBER_OF_NODES; i++) {
  prev[i] = new Array(NUMBER_OF_NODES).fill(NO_PREVIOUS_NODE);
}

function initializeCostMatrix() {
  NUMBER_OF_NODES = 5;

  cost = new Array(NUMBER_OF_NODES);
  for (let i = 0; i < NUMBER_OF_NODES; i++) {
    cost[i] = new Array(NUMBER_OF_NODES);
  }

  cost[0] = [0, 3, 8, INFINITY, -4];
  cost[1] = [INFINITY, 0, INFINITY, 1, 7];
  cost[2] = [INFINITY, 4, 0, INFINITY, INFINITY];
  cost[3] = [2, INFINITY, -5, 0, INFINITY];
  cost[4] = [INFINITY, INFINITY, INFINITY, 6, 0];
}

module.exports = {
  NUMBER_OF_NODES: NUMBER_OF_NODES,
  cost: cost,
  prev: prev,
};
