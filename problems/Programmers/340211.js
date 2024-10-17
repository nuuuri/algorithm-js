// [Level 2][PCCP 기출문제] 3번 / 충돌위험 찾기

function solution(points, routes) {
  const paths = [];

  for (let route of routes) {
    const routePoints = route.map((idx) => points[idx - 1]);
    const path = getShortestPaths(routePoints);

    paths.push([...path]);
  }

  return findRiskFactors(paths);
}

function getShortestPaths(points) {
  let paths = [[...points[0]]];

  for (let i = 0; i < points.length - 1; i += 1) {
    paths.push(...getShortestPath(points[i], points[i + 1]));
  }

  return paths;
}

function getShortestPath(start, end) {
  let current = [start[0], start[1]];
  const path = [];

  while (!(current[0] === end[0] && current[1] === end[1])) {
    // r 좌표 이동
    if (current[0] !== end[0]) {
      current[0] = current[0] + (current[0] < end[0] ? 1 : -1);
    }
    // c 좌표 이동
    else {
      current[1] = current[1] + (current[1] < end[1] ? 1 : -1);
    }

    path.push([...current]);
  }

  return path;
}

function findRiskFactors(lists) {
  const max_size = findMaxLength(lists);
  let cnt = 0;

  for (let j = 0; j < max_size; j += 1) {
    const visited = Array.from(new Array(101), () => new Array(101).fill(0));

    for (let i = 0; i < lists.length; i += 1) {
      if (lists[i][j]) {
        visited[lists[i][j][0]][lists[i][j][1]] += 1;
      }
    }

    for (let v of visited) {
      for (let vv of v) {
        if (vv > 1) cnt += 1;
      }
    }
  }

  return cnt;
}

function findMaxLength(list) {
  let max_size = -1;

  for (let i = 0; i < list.length; i += 1) {
    if (list[i].length > max_size) {
      max_size = list[i].length;
    }
  }

  return max_size;
}
