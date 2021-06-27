const helpers = {
  initializeGraph: (numberOfNodes) => {
    const graph = new Array(numberOfNodes);

    graph[0] = [1];
    graph[1] = [2];
    graph[2] = [0];
    graph[3] = [7, 4];
    graph[4] = [5];
    graph[5] = [0, 6];
    graph[6] = [0, 2, 4];
    graph[7] = [3, 5];

    return graph;
  },
};

module.exports = helpers;
