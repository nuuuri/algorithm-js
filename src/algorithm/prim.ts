/**
 *
 * @param graph 인접 행렬
 */
export default function prim(graph: number[][]) {
  const V = graph.length; // 노드의 갯수
  const isVisited = new Array(V).fill(false);
  const weights = new Array(V).fill(Infinity);

  weights[0] = 0; // 첫번째 정점부터 시작

  for (let i = 0; i < V; i++) {
    let minWeight = Infinity,
      u = -1;

    // 최소 값을 갖는 정점 찾기
    for (let v = 0; v < V; v++) {
      if (!isVisited[v] && weights[v] < minWeight) {
        minWeight = weights[v];
        u = v;
      }
    }

    isVisited[u] = true;

    for (let v = 0; v < V; v++) {
      if (graph[u][v] && !isVisited[v] && graph[u][v] < weights[v]) {
        weights[v] = graph[u][v];
      }
    }
  }

  return weights.reduce((a, b) => a + b, 0);
}

const graph = [
  [0, 8, 0, 10, 5, 10, 1],
  [8, 0, 4, 0, 0, 0, 0],
  [0, 4, 0, 0, 0, 0, 0],
  [10, 0, 0, 0, 2, 0, 0],
  [5, 0, 0, 2, 0, 0, 0],
  [10, 0, 0, 0, 0, 0, 5],
  [1, 0, 0, 0, 0, 5, 0],
];

console.log(prim(graph));
