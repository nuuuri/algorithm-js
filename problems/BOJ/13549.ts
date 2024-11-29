// [G5] 숨바꼭질3

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const MAX = 100001;
let [N, K] = [0, 0];

function solution(n: number, k: number) {
  const time = new Array(MAX).fill(Infinity);
  const queue: number[] = [];

  queue.push(n);
  time[n] = 0;
  let idx = 0;

  while (idx < queue.length && time[k] === Infinity) {
    const node = queue[idx++];
    const t = time[node];

    for (let next = node * 2; next < MAX; next *= 2) {
      if (!next) break;

      if (time[next] === Infinity) {
        queue.push(next);
        time[next] = t;
      }
    }

    for (let next of [node - 1, node + 1]) {
      if (n >= 0 && n < MAX && time[next] === Infinity) {
        queue.push(next);
        time[next] = t + 1;
      }
    }
  }

  return time[k];
}

rl.on("line", function (line: string) {
  [N, K] = line.split(" ").map((val) => +val);
  rl.close();
}).on("close", function () {
  const answer = solution(N, K);
  console.log(answer);
  process.exit();
});
