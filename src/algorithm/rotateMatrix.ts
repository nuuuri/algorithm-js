// 90도 회전 (시계방향)
export function rotateMatrix<T>(arr: T[][]) {
  const N = arr.length;
  const M = arr[0].length;

  let result: T[][] = Array.from(new Array(M), () => new Array(N).fill(0));

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      result[j][N - i - 1] = arr[i][j];
    }
  }

  return result;
}

// -90도 회전 (반시계방향)
export function rotateMatrixReversed<T>(arr: T[][]) {
  const N = arr.length;
  const M = arr[0].length;

  let result: T[][] = Array.from(new Array(M), () => new Array(N).fill(0));

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      result[M - j - 1][i] = arr[i][j];
    }
  }

  return result;
}
