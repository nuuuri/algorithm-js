// [Level 2][2024 KAKAO WINTER INTERNSHIP] 도넛과 막대 그래프

function solution(edges) {
  const graphInfo = {};

  edges.forEach(([a, b]) => {
    graphInfo[a] ||= { in: 0, out: 0 };
    graphInfo[b] ||= { in: 0, out: 0 };

    graphInfo[a].out++;
    graphInfo[b].in++;
  });

  let startNode = (donutGraph = barGraph = eightGraph = 0);

  for (let key in graphInfo) {
    const node = graphInfo[key];

    if (node.in === 0 && node.out >= 2) startNode = +key;
    else if (node.out === 0) barGraph++;
    else if (node.out === 2) eightGraph++;
  }

  donutGraph = graphInfo[startNode].out - barGraph - eightGraph;

  return [startNode, donutGraph, barGraph, eightGraph];
}
