module.exports = (function () {
  const NUMBER_OF_NODES = 8;
  const UNVISITED_ID = -1;

  const id = -1;
  const nodeIds = new Array(NUMBER_OF_NODES).fill(UNVISITED_ID);
  const lowlink = new Array(NUMBER_OF_NODES).fill(-1);
  const visited = new Array(NUMBER_OF_NODES).fill(false);
  const onStack = new Array(NUMBER_OF_NODES).fill(false);
  const stack = new Array();

  return {
    NUMBER_OF_NODES: NUMBER_OF_NODES,
    nodeIds: nodeIds,
    lowlink: lowlink,
    visited: visited,
    onStack: onStack,
    stack: stack,
    id: id,
  };
})();
