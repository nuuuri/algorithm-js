// [Level 3][동적계획법(Dynamic Programming)] 등굣길

function solution(m, n, puddles) {
  const count = Array.from(new Array(m + 1), () => new Array(n + 1).fill(0));

  count[1][1] = 1;

  puddles.forEach(([x, y]) => {
    count[x][y] = null;
  });

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if ((i === 1 && j === 1) || count[i][j] === null) continue;

      count[i][j] = (count[i - 1][j] + count[i][j - 1]) % 1000000007;
    }
  }

  return count[m][n];
}
