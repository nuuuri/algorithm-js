// [G3] 벽 부수고 이동하기

const input: string[] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((str) => str.split("").map(Number));
const MOVE = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function solution(arr: number[][], N: number, M: number) {
  const isVisited: boolean[][] = Array.from(new Array(N), () =>
    new Array(M).fill(false)
  );
  const isBrokenVisited: boolean[][] = Array.from(new Array(N), () =>
    new Array(M).fill(false)
  );
  const queue: number[][] = [];
  let idx = 0;

  queue.push([0, 0, 1, 0]);
  isVisited[0][0] = true;

  while (idx < queue.length) {
    const [x, y, cnt, broken] = queue[idx++];

    if (x === N - 1 && y === M - 1) {
      console.log(cnt);
      return;
    }

    for (let [dx, dy] of MOVE) {
      const xx = x + dx;
      const yy = y + dy;

      if (xx < 0 || xx >= N || yy < 0 || yy >= M) continue;

      if (broken) {
        if (arr[xx][yy] === 0 && !isBrokenVisited[xx][yy]) {
          isBrokenVisited[xx][yy] = true;
          queue.push([xx, yy, cnt + 1, broken]);
        }
      } else {
        if (isVisited[xx][yy]) continue;

        if (arr[xx][yy] === 0) {
          isVisited[xx][yy] = true;
          queue.push([xx, yy, cnt + 1, broken]);
        } else {
          isBrokenVisited[xx][yy] = true;
          queue.push([xx, yy, cnt + 1, 1]);
        }
      }
    }
  }

  console.log(-1);
}

solution(arr, N, M);
