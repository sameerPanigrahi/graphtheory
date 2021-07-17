let NUMBER_OF_NODES, adjMat;

const UNVISITED = -1;

initializeCostMatrix();

// preorder id
const preOrderId = new Array(NUMBER_OF_NODES).fill(UNVISITED);
const lowlink = new Array(NUMBER_OF_NODES).fill(UNVISITED);

function initializeCostMatrix() {
  NUMBER_OF_NODES = 10;

  adjMat = new Array(NUMBER_OF_NODES);
  for (let i = 0; i < NUMBER_OF_NODES; i++) {
    adjMat[i] = new Array(NUMBER_OF_NODES).fill(0);
  }

  adjMat[0][1] = adjMat[1][0] = 1;
  adjMat[0][2] = adjMat[2][0] = 1;
  adjMat[1][2] = adjMat[2][1] = 1;
  adjMat[1][3] = adjMat[3][1] = 1;
  adjMat[1][4] = adjMat[4][1] = 1;
  adjMat[2][3] = adjMat[3][2] = 1;
  adjMat[2][7] = adjMat[7][2] = 1;
  adjMat[4][5] = adjMat[5][4] = 1;
  adjMat[4][6] = adjMat[6][4] = 1;
  adjMat[5][6] = adjMat[6][5] = 1;
  adjMat[7][8] = adjMat[8][7] = 1;
  adjMat[7][9] = adjMat[9][7] = 1;
}

module.exports = {
  NUMBER_OF_NODES: NUMBER_OF_NODES,
  UNVISITED: UNVISITED,
  adjMat: adjMat,
  preOrderId: preOrderId,
  lowlink: lowlink,
};
