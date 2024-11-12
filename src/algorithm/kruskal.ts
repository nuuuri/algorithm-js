/**
 *
 * @param N 노드의 개수
 * @param edges 모든 edge의 정보를 담은 배열
 */
export default function kruskal(
  N: number,
  edges: { cost: number; from: number; to: number }[]
) {
  // cost순으로 정렬
  edges.sort((a, b) => a.cost - b.cost);

  const root = new Array(N).fill(0).map((_, idx) => idx);
  let totalCost = 0;

  const findRoot = (node: number) => {
    if (root[node] != node) root[node] = findRoot(root[node]);

    return root[node];
  };

  edges.forEach((edge) => {
    const rootFrom = findRoot(edge.from);
    const rootTo = findRoot(edge.to);

    // from과 to의 root가 다를 경우 추가
    // 같은 경우 사이클이 생김
    if (rootFrom !== rootTo) {
      root[rootTo] = rootFrom; // 하나의 그룹으로 합침
      totalCost += edge.cost;
    }
  });

  return totalCost;
}

const edges = [
  { from: 0, to: 1, cost: 20 },
  { from: 0, to: 2, cost: 18 },
  { from: 3, to: 0, cost: 10 },
  { from: 1, to: 2, cost: 15 },
  { from: 2, to: 3, cost: 25 },
];

console.log(kruskal(4, edges));
