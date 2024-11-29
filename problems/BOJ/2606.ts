// [S3] 바이러스

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: string[] = [];

rl.on("line", function (line: string) {
  input.push(line);

  if (input.length >= 2 && input.length === +input[1] + 2) rl.close();
}).on("close", function () {
  const [N, E] = [+input[0], +input[1]];
  const edges = new Array(N + 1).fill([]);

  for (let i = 2; i < input.length; i++) {
    const [from, to] = input[i].split(" ").map((v) => +v);

    edges[from] = [...edges[from], to];
    edges[to] = [...edges[to], from];
  }

  solution(N, edges);
  process.exit();
});

function solution(N: number, edges: number[][]) {
  let answer = 0;

  const visited = new Array(N + 1).fill(false);
  const stack: number[] = [];

  stack.push(1);
  visited[1] = true;

  while (stack.length > 0) {
    const current = stack.pop() || -1;

    if (!visited[current]) {
      visited[current] = true;
      answer++;
    }

    for (let next of edges[current]) {
      if (!visited[next]) stack.push(next);
    }
  }

  console.log(answer);
}
