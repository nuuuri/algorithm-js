// [Level 2][PCCP 기출문제] 2번 / 석유 시추

function solution(land) {
  const N = land.length;
  const M = land[0].length;
  const graph = {};
  let index = 1;

  // 석유 그래프 찾기
  const visited = Array.from(new Array(N), () => new Array(M).fill(false));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (land[i][j] > 0 && !visited[i][j]) {
        const result = dfs(land, visited, [i, j], index);
        graph[index] = result;
        index++;
      }
    }
  }

  // 시추관 설치하기
  const answer = new Array(M).fill(0);
  for (let j = 0; j < M; j++) {
    let visitedGraph = {};
    for (let i = 0; i < N; i++) {
      const index = land[i][j];

      if (index > 0 && !visitedGraph[index]) {
        answer[j] += graph[index];
        visitedGraph[index] = true;
      }
    }
  }

  return Math.max(...answer);
}

function dfs(arr, visited, start, index) {
  const stack = [start];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let cnt = 0;

  while (stack.length > 0) {
    const [i, j] = stack.pop();

    if (!visited[i][j]) {
      visited[i][j] = true;
      arr[i][j] = index;
      cnt++;
    }

    for (let k = 0; k < 4; k++) {
      const x = i + dx[k];
      const y = j + dy[k];

      if (
        x >= 0 &&
        x < arr.length &&
        y >= 0 &&
        y < arr[0].length &&
        arr[x][y] > 0 &&
        !visited[x][y]
      ) {
        stack.push([x, y]);
      }
    }
  }

  return cnt;
}
