// [Level 3][2022 KAKAO BLIND RECRUITMENT] 양과 늑대

function solution(info, edges) {
  let answer = 0;
  const graph = new Array(info.length).fill([]);

  for (let [parent, child] of edges) graph[parent] = [...graph[parent], child];

  const visitNode = (current, sheep, wolf, nodes) => {
    if (info[current]) wolf++;
    else sheep++;

    if (sheep <= wolf) return;
    if (answer < sheep) answer = sheep;

    nodes.forEach((child, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      graph[child].forEach((c) => rest.push(c));
      visitNode(child, sheep, wolf, rest);
    });
  };

  visitNode(0, 0, 0, [...graph[0]]);

  return answer;
}
