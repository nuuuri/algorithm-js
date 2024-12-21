// [Level 3][Summer/Winter Coding(~2018)] 숫자 게임

function solution(A, B) {
  let win = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let j = 0;
  for (let i = 0; i < A.length; i++) {
    while (j < B.length - 1 && A[i] >= B[j]) j++;

    if (A[i] < B[j]) {
      win++;
      j++;
    }
  }

  return win;
}
